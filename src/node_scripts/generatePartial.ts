import { generatePartialExamplesFromQuery } from "../partial";

import { readdirSync, writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";

// Find dirs in examples folder
const exampleDirs = readdirSync('./examples',{ withFileTypes: true }).filter(dirent => dirent.isDirectory())


exampleDirs.forEach((exampleDir) => {
    // read query
    const query = readFileSync(`./examples/${exampleDir.name}/operation.gql`, 'utf8')
    // construct raw relay artifact and write it to the folder for compilation
    const relayRaw = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${query}\n\``
    writeFileSync(`./examples/${exampleDir.name}/operation.gql.ts`, relayRaw)

    // read fragment if exists
    if (existsSync(`./examples/${exampleDir.name}/fragment.gql`)) {
        const fragment = readFileSync(`./examples/${exampleDir.name}/fragment.gql`, 'utf8')
        // construct raw relay artifact from the fragment and write it to the folder for compilation
        const relayRawFragment = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${fragment}\n\``
        writeFileSync(`./examples/${exampleDir.name}/fragment.gql.ts`, relayRawFragment)
    }

    // generate partial queries from the main query
    const partials = generatePartialExamplesFromQuery(query)

    // check if __partials__ dir exists, if not, create one
    if (!existsSync(`./examples/${exampleDir.name}/__partials__`))
        mkdirSync(`./examples/${exampleDir.name}/__partials__`);

    // check if __partials__/relay dir exists, if not, create one
    if (!existsSync(`./examples/${exampleDir.name}/__partials__/relay`))
        mkdirSync(`./examples/${exampleDir.name}/__partials__/relay`);

    // check if __partials__/other dir exists, if not, create one
    if (!existsSync(`./examples/${exampleDir.name}/__partials__/other`)) 
        mkdirSync(`./examples/${exampleDir.name}/__partials__/other`);

    // loop through generated partials and save each into a gql and gql.ts (for relay) files 
    for (let i=0; i < partials.length; i++) {
        const partial = partials[i]
        
        const relayTemplate = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${partial}\n\``

        writeFileSync(`./examples/${exampleDir.name}/__partials__/relay/partial${(partials.length - i) < 10 ? "0" + String((partials.length - i)) : (partials.length - i)}.gql.ts`, relayTemplate)
        writeFileSync(`./examples/${exampleDir.name}/__partials__/other/partial${(partials.length - i) < 10 ? "0" + String((partials.length - i)) : (partials.length - i)}.gql`, partial)
    }

})
