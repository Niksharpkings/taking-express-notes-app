const path = require('path'); // require path
const router = require('express').Router(); // create a new router

router.get('/', (req, res) => { // get index.html
  res.sendFile(path.join(__dirname, '../../public/index.html')); // send index.html
});

router.get('/notes', (req, res) => { // get notes.html
  res.sendFile(path.join(__dirname, '../../public/notes.html')); // send notes.html
});

router.get('*', (req, res) => { // get all other pages
  res.sendFile(path.join(__dirname, '../../public/index.html')); // send index.html
});

module.exports = router;