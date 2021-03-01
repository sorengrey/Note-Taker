// dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

// sets up Express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// designated port
const PORT = 8080;

// route to the main page - untested
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// route to the notes page - untested
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// listening
app.listen(PORT, () => console.log(`listening on ${PORT}`));