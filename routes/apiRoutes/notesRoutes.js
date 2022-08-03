const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes'); // get notes from db

// notes are available at api/notes in JSON 
router.get('/notes', (req, res) => { // get all notes
  let results = notesArray; // get all notes from the notesArray
  res.json(results); // send back the notes array
}); // end of GET /notes

router.post('/notes', (req, res) => { // create a new note
  // set id based on what the next index of the array will be
  if(notesArray){
  req.body.id = notesArray.length.toString();  // convert to string
  } else {
    req.body.id = 0
  } // if the array is empty, set the id to 0
  res.json(createNewNote(req.body, notesArray)); // create new note and return it in JSON
}); // end of post route

// Route parameters :id
router.delete('/notes/:id', async (req, res) => { // async function to delete note
  const { id } = req.params // get id from params
  notesArray = await deleteNote(id, notesArray); // delete note
  res.json(notesArray); // send back updated notes array
}); // end delete note

module.exports = router; // export router