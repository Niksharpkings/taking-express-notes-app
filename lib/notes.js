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
  let notesArray = notes.filter(el => { // filter notesArray
    if (el.id == id) { // if id matches
      return false // return false
    } else { // if id doesn't match
      return true // return true
    } // end if
  }) // end filter

  // re-index notesArray
  let index = 0;  // set index to 0
  notesArray.forEach(note => { // for each note in notesArray
    note.id = index; // set id to index
    index += 1; // increment index
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