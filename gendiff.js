import fs from "node:fs"
import { Command } from "commander";
const program = new Command();

const readFiles = (filepath1, filepath2) => {
        const firstFile = fs.readFileSync(filepath1, "utf-8")
        const secondFile = fs.readFileSync(filepath2, "utf-8")
        console.log(JSON.parse(firstFile));
        console.log(JSON.parse(secondFile));
}

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => readFiles(filepath1, filepath2))

program.parse()