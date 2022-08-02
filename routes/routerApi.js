const router = require('express').Router();
const { createNote } = require('../lib/notes');
let { savedNotesArr } = require('../db/db.json');

router.get('/notes', (req, res) => {
    let arr = savedNotesArr;
    res.json(arr);
});

router.post('/notes', (req, res) => {
    if (savedNotesArr) {
        req.body.id = savedNotesArr.length.toString();
    } else {
        req.body.id = 0;
    }
    res.json(createNote(req.body, savedNotesArr));
});

module.exports = router;