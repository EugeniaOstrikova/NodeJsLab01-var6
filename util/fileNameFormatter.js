function createDate() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    return day + "-" + month + "-" + year;
}

function formatterFileName(count) {
    return "files/nodeLab1-var6-Ostrikova-" + createDate() + "-" + count + ".txt";
}

module.exports = formatterFileName;