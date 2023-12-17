const fs = require("fs");
const util = require("util");
const express = require("express");

const app = express.Router();
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

let notesDB;

// Read notes from JSON file
function readNotesFile() {
  return readFileAsync("db/db.json", "utf8").then(data => {
    notesDB = JSON.parse(data);
  });
}

// Write notes to JSON file
function writeNotesFile() {
  const noteJSON = JSON.stringify(notesDB, null, 2);
  return writeFileAsync("db/db.json", noteJSON);
}

// GET request
app.get("/notes", (req, res) => {
  readNotesFile().then(() => {
    res.json(notesDB);
  });
});

// POST request
app.post("/notes", (req, res) => {
  readNotesFile().then(() => {
    const newNote = req.body;
    newNote.id = notesDB.length + 1;

    notesDB.push(newNote);

    writeNotesFile().then(() => {
      console.log("Note has been added.");
      res.json(notesDB);
    });
  });
});

// DELETE request
app.delete("/notes/:id", (req, res) => {
  const selID = parseInt(req.params.id);

  for (let i = 0; i < notesDB.length; i++) {
    if (selID === notesDB[i].id) {
        notesDB.splice(i, 1);

      writeNotesFile().then(() => {
        console.log("Note has been deleted.");
        res.json(notesDB);
      });

      return; // Exit the loop after deletion
    }
  }

  res.json(notesDB);
});

module.exports = app;
