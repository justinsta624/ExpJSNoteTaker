const apiRouter = require("express").Router();
const store = require("../node_modules/store");

// GET "/api/notes" responds with all notes from the database
apiRouter.get("/notes", (req, res) => {
  store.readNotesFile().then((notes) => {
    res.json(notes);
  });
});

// POST "/api/notes" adds a new note to the database
apiRouter.post("/notes", (req, res) => {
  store.readNotesFile().then((notes) => {
    const newNote = req.body;
    newNote.id = notes.length + 1;

    notes.push(newNote);

    store.writeNotesFile(notes).then(() => {
      console.log("Note has been added.");
      res.json(notes);
    });
  });
});

// DELETE "/api/notes/:id" deletes the note with an id equal to req.params.id
apiRouter.delete("/notes/:id", (req, res) => {
  const selID = parseInt(req.params.id);

  store.readNotesFile().then((notes) => {
    for (let i = 0; i < notes.length; i++) {
      if (selID === notes[i].id) {
        notes.splice(i, 1);

        store.writeNotesFile(notes).then(() => {
          console.log("Note has been deleted.");
          res.json(notes);
        });

        return; // Exit the loop after deletion
      }
    }

    res.json(notes);
  });
});

module.exports = apiRouter;