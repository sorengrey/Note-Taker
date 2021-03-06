const express = require("express");
const fs = require("fs");
const path = require("path");

// exports the routes
module.exports = (app) => {

  // get route for notes page 
  app.get('/api/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  })

  //post route for the notes page
  app.post('/api/notes', (req, res) => {
    let note = req.body;
    // reads the json file
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.send(data);
      const noteObject = JSON.parse(data);
      noteObject.push(note);

      //writes what's in the json to the page
      fs.writeFile('./Develop/db/db.json', JSON.stringify(noteObject), err => {
        if (err) throw err;
        return true;
      });
    })
  })}