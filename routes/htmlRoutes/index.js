const path = require('path'); // require path
const router = require('express').Router(); // create a new router

router.get('/', (request, response) => { // get index.html
  response.sendFile(path.join(__dirname, '../../public/index.html')); // send index.html
});

router.get('/notes', (request, response) => { // get notes.html
  response.sendFile(path.join(__dirname, '../../public/notes.html')); // send notes.html
});

router.get('*', (request, response) => { // get all other pages
  response.sendFile(path.join(__dirname, '../../public/index.html')); // send index.html
});

module.exports = router;