import path from "node:path";
import fs from "node:fs";
import { Command } from "commander";


const program = new Command();

const readFiles = (filepath) => {
    const pathToFile = path.resolve(filepath);
    const fileText = fs.readFileSync(pathToFile, "utf-8");
    return JSON.parse(fileText);
};

const genDiff = (path1, path2) => {
    const fileKeys1 = [...Object.keys(readFiles(path1)).sort()];
    const fileKeys2 = [...Object.keys(readFiles(path2)).sort()];
    console.log(fileKeys1);
    console.log(fileKeys2);
    const obj = fileKeys1
            .map((value) => {
                if(value.includes(fileKeys2)){
                    return {  fileKeys1 : 'test' }
                }
            })
           console.log(obj)
    
};


program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => genDiff(filepath1, filepath2))

program.parse()