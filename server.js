const express = require('express'); // require express

const PORT = process.env.PORT || 3001; // set port
const app = express(); // create express app
const apiRoutes = require('./routes/apiRoutes'); // get api routes
const htmlRoutes = require('./routes/htmlRoutes'); // get html routes

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true })); // use express.urlencoded
app.use(express.json()); // use express.json

// Host public folder
app.use(express.static('public')); // use express.static

// Use apiRoutes
app.use('/api', apiRoutes); // use apiRoutes
app.use('/', htmlRoutes); // use htmlRoutes

app.listen(PORT, () => { // listen on port
  console.log(`🌍API server now on port ${PORT}!`); // log message
});