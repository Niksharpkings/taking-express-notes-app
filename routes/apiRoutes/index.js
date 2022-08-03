const router = require('express').Router(); // create a new router
const notesRoutes = require('./notesRoutes'); // get notes routes

router.use(notesRoutes); // use notesRoutes

module.exports = router; // export router