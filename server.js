// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

// sets up Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// required routes
const apiRoute = require('./Develop/public/assets/js/routes/apiRoutes')(app);
const htmlRoute = require('./Develop/public/assets/js/routes/htmlRoutes')(app);

// designated initial port
const PORT = 8080;

// listening (starts the server)
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// going to need a post request for the note form

// going to need a delete request for the note form