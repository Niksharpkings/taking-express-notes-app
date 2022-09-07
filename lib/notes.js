const fs = require('fs'); // require fs
const path = require('path'); // get all notes

function createNewNote(body, notesArray) { // create a new note
  const note = body; // get note from body
  notesArray.push(note); // add note to notesArray
  fs.writeFileSync( // write to file
    path.join(__dirname, '../db/notes.json'), // write to notes.json
    JSON.stringify({ notesArray }, null, 2) // stringify notesArray
  ); // end write to file
  return note; // return note
} // end createNewNote

// delete note with matching index
function deleteNote(id, notes) { // delete note
  const notesArray = notes.filter(element => { // filter notesArray
    return element.id == id ? false : true;
  }) // end filter

  // re-index notesArray
  let index = 0;  // set index to 0
  notesArray.forEach((note) => {
      note.id = index; // set id to index
      index++; // increment index
    }); // end forEach

  //write to file
  fs.writeFileSync( // write to file
    path.join(__dirname, '../db/notes.json'), // write to notes.json
    JSON.stringify({ notesArray }, null, 2) // stringify notesArray
  );
  return notesArray; // return notesArray
}

module.exports = {
  createNewNote, // export createNewNote
  deleteNote // export deleteNote
};