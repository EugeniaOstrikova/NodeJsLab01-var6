function textFormatted(text, world) {
    let rowsArray = text.split("\n");

    let newRowsArr = rowsArray.map(row => {
        return row.toLowerCase().replace(world.toLowerCase(), "");
    });

    return newRowsArr.sort().reduce((text, row) => text + "\n" +  row.trim());
}

module.exports = textFormatted;