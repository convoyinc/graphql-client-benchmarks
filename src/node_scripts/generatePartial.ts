import { generatePartialExamplesFromQuery } from "../partial";

import * as fs from 'fs'

// Find dirs in examples folder
const exampleDirs = fs.readdirSync('./examples',{ withFileTypes: true }).filter(dirent => dirent.isDirectory())


exampleDirs.forEach((exampleDir) => {
    // read query
    const query = fs.readFileSync(`./examples/${exampleDir.name}/operation.gql`, 'utf8')
    
    // generate partial queries from the main query
    const partials = generatePartialExamplesFromQuery(query)

    // check if __partials__ dir exists, if not, create one
    if (!fs.existsSync(`./examples/${exampleDir.name}/__partials__`))
        fs.mkdirSync(`./examples/${exampleDir.name}/__partials__`);        

    // check if __partials__/relay dir exists, if not, create one
    if (!fs.existsSync(`./examples/${exampleDir.name}/__partials__/relay`))
        fs.mkdirSync(`./examples/${exampleDir.name}/__partials__/relay`);        

    // check if __partials__/other dir exists, if not, create one
    if (!fs.existsSync(`./examples/${exampleDir.name}/__partials__/other`)) 
        fs.mkdirSync(`./examples/${exampleDir.name}/__partials__/other`);

    // loop through generated partials and save each into a gql and gql.ts (for relay) files 
    for (let i=0; i < partials.length; i++) {
        const partial = partials[i]
        
        const relayTemplate = `import graphql from 'babel-plugin-relay/macro';\ngraphql\`\n${partial}\n\``

        fs.writeFile(`./examples/${exampleDir.name}/__partials__/relay/partial${partials.length - i}.gql.ts`, relayTemplate, (err)=>{
            !err ? console.log("done") : console.error(err);
        })

        fs.writeFile(`./examples/${exampleDir.name}/__partials__/other/partial${partials.length - i}.gql`, partial, (err)=>{
            !err ? console.log("done") : console.error(err);
        })
    }

})
