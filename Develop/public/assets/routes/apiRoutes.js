const express = require("express");
const path = require("path");
const app = express();

//const noteData = require('../Develop/db/db.json')

module.exports = (app) => {
app.get("/api/notes", (req, res) => {
    // data is what you'll get from the form -- figure out that variable name! noteList?
    // res.json(noteData)
})
 app.post("/api/notes", (req, res) => {
   // noteList.push(req.body);  -- this might be wrong
 res.send("Success!");
  })

}