let textFormatted = require("./util/textFormatter");
let formatterFileName = require("./util/fileNameFormatter");
let fs = require("fs");

class Command {
    constructor() {}

    createFile() {
        createNewFile("");
    }

    readFile(path) {
        fs.readFile(path, "utf8", (err, text) => {
            if (err) throw err;

            console.log(text);
        });
    }

    writeDataInFile(path) {
        fs.writeFile(path, process.argv[4] || "", (err) => { if (err) throw err; });
    }

    getFiles() {
        fs.readdir("files", (err, data) => {
            if (err) throw err;

            data.forEach(file => console.log("files/" + file));
        });
    }

    deleteFile(path) {
        removeFileByPath(path);
    }

    deleteAllFiles() {
        fs.readdir("files", (err, data) => {
            if (err) throw err;

            data.forEach(file => {
                removeFileByPath("files/" + file);
            })
        });
    }

    saveNewText(path) {
        fs.readFile(path, "utf8", (err, text) => {
            if (err) throw err;

            createNewFile(textFormatted(text, process.argv[4]))
        });
    }

}

function createNewFile(text) {
    fs.readdir("files", (err, data) => {
        if (err) throw err;

        let fileName = formatterFileName(data.length);
        fs.writeFile(fileName, text, (err) => {
            if (err) throw err;
        });

        console.log("Create a new file with name " + fileName);
    })
}

function removeFileByPath(path) {
    fs.unlink(path, (err) => {
        if (err) throw err;

        console.log(path + " file was deleted");
    });
}

module.exports = Command;