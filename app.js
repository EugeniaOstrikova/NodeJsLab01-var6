let Command = require('./Command.js');
let program = require('commander');

let command = new Command();

program
    .option('-c, --create', 'Create a new file', command.createFile)
    .option('-w, --write [path] [text]', 'Write data in file', command.writeDataInFile)
    .option('-f, --files', 'Show all files', command.getFiles)
    .option('-r, --read [path]', 'Read file', command.readFile)
    .option('-d, --delete [path]', 'Delete a file', command.deleteFile)
    .option('-D, --delete-all', 'Delete all files', command.deleteAllFiles)
    .option('-t, --task [path] [world]', 'Read a file by path, remove selected world and save it in a new file.', command.saveNewText);

program.parse(process.argv);