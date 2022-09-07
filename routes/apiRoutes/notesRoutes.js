const router = require('express').Router();
const { createNewNote: postNewNote, deleteNote: deleteANotes } = require('../../lib/notes');
let { notesArray: noteArr } = require('../../db/notes'); // get notes from db

// notes are available at api/notes in JSON 
router.get('/notes', (_request, response) => { // get all notes
  const results = noteArr; // get all notes from the notesArray
  response.json(results); // send back the notes array
}); // end of GET /notes

router.post('/notes', (request, response) => { // create a new note
  // set id based on what the next index of the array will be
  request.body.id = noteArr ? noteArr.length.toString() : 0;
  response.json(postNewNote(request.body, noteArr)); // create new note and return it in JSON
}); // end of post route

// Route parameters :id
router.delete('/notes/:id', async (request, response) => { // async function to delete note
  const { id } = request.params // get id from params
  noteArr = await deleteANotes(id, noteArr); // delete note
  response.json(noteArr); // send back updated notes array
}); // end delete note

module.exports = router; // export router