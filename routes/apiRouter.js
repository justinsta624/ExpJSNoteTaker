const express = require('express').Router();
const store = require('../db/store')

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  store.readNotesFile().then(() => {
    res.json(store.notesDB);
  });
});

// POST "/api/notes" adds a new note to the database
router.post('/notes', (req, res) => {
  store.readNotesFile().then(() => {
    const newNote = req.body;
    newNote.id = store.notesDB.length + 1;

    store.notesDB.push(newNote);

    store.writeNotesFile().then(() => {
      console.log("Note has been added.");
      res.json(store.notesDB);
    });
  });
});

// DELETE "/api/notes/:id" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  const selID = parseInt(req.params.id);

  for (let i = 0; i < store.notesDB.length; i++) {
    if (selID === store.notesDB[i].id) {
      store.notesDB.splice(i, 1);

      store.writeNotesFile().then(() => {
        console.log("Note has been deleted.");
        res.json(store.notesDB);
      });

      return; // Exit the loop after deletion
    }
  }

  res.json(store.notesDB);
});

module.exports = router;