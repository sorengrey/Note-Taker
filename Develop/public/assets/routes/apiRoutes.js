const express = require("express");
const fs = require("fs");
const path = require("path");

// exports the routes
module.exports = (app) => {
  // reads the database file
  fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const noteObject = JSON.parse(data);

    // api route for notes page
    app.get("/api/notes", (req, res) => {
      res.json(noteObject);
      console.log(noteOject);
    })

  app.post("/api/notes", (req, res) => {


  fs.writeFile('./Develop/db/db.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
    if (err) throw err
    console.log('Done!')
  })
  })
  })
}