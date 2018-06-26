#!/usr/bin/env bash
set -e

parse_version() {
  version="${1}"
  node <<-end_script
    const match = '${version}'.match(/(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
    for (var i = 1; i < match.length; i++) {
      if (match[i]) {
        console.log(match[i]);
      }
    }
end_script
}

write_package_key() {
  local KEY="${1}"
  local VALUE="${2}"

  node <<-end_script
    const fs = require('fs');
    const packageInfo = JSON.parse(fs.readFileSync('package.json'));
    packageInfo['${KEY}'] = '${VALUE}';
    fs.writeFileSync('package.json', JSON.stringify(packageInfo, null, 2));
end_script
}

# Make sure we have all tags available
git fetch origin --tags

VERSION_TEMPLATE=$(node -p "JSON.parse(fs.readFileSync('package.json')).version")
CLOSEST_VERSION=$(git describe --abbrev=0 --tags)
TEMPLATE_PARTS=($(parse_version "${VERSION_TEMPLATE}"))
CLOSEST_PARTS=($(parse_version "${CLOSEST_VERSION}"))

X="${TEMPLATE_PARTS[0]}"
Y="${TEMPLATE_PARTS[1]}"
if [[ "${TEMPLATE_PARTS[0]}" == "${CLOSEST_PARTS[0]}" && "${TEMPLATE_PARTS[1]}" == "${CLOSEST_PARTS[1]}" ]]; then
  # No change in X.Y - just increment.
  Z=$((CLOSEST_PARTS[2] + 1))
else
  Z="${TEMPLATE_PARTS[2]}"
fi

NEW_VERSION="${X}.${Y}.${Z}"
PRE="${TEMPLATE_PARTS[3]}"
if [[ "${PRE}" != "" ]]; then
  NEW_VERSION="${NEW_VERSION}-${PRE}"
fi

echo "Releasing ${NEW_VERSION}…"
write_package_key version "${NEW_VERSION}"

yarn publish

git tag v${NEW_VERSION} -m "${CIRCLE_BUILD_URL}"
git push --tags
git reset --hard HEAD\^
