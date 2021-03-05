const express = require("express");
const { fstat } = require("fs");
const path = require("path");
const app = express();

// might not need this
const database = require("./../../../db/db.json");

module.exports = (app) => {
  // path works, the json does not
  app.get("/api/notes", (req, res) => {
    console.log('app.get reporting in');
    
})

  app.post("/api/notes", (req, res) => {
  console.log(req.body);
  // fix this! It needs to push to the database, but it doesn't yet
  database.push(req.body);
  })

}