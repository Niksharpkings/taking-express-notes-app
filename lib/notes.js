const fs = require("fs");

const path = require("path");

function createNote(body, array) {
    const note = body;
    array.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ array }, null, 2)
    );
    return note;
}

module.exports = { createNote };