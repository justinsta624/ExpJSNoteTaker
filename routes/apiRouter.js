const apiRouter = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");

// GET "/api/notes" responds with all notes from the database
apiRouter.get("/notes", (req, res) => {
  console.log("note has added successfully!");
  fs.readFile('./db/db.json', 'utf8', (error, notes) => {
    console.log(notes)
    error ? console.error(error) : res.json(JSON.parse(notes))
  }
  );
});

// POST "/api/notes" adds a new note to the database
apiRouter.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid()
    };
    fs.readFile('./db/db.json', 'utf8', (error, notes) => {
      console.log(notes)
      error ? console.error(error) : res.json(JSON.parse(notes))
      let output = JSON.parse(notes);
      output.push(newNote);
      fs.writeFile('./db/db.json', JSON.stringify(output), (error) => {
        console.log(notes)
        error ? console.error(error) : res.json(JSON.parse(notes))
        res.json(newNote);
      });
    });
  };
});

apiRouter.delete("/notes/:id", (req, res)=>{
  console.log(req.params.id);
  fs.readFile('./db/db.json', 'utf8', (error, notes) => {
    console.log(notes)
    error ? console.error(error) : res.json(JSON.parse(notes))
      let output = JSON.parse(notes);
      const SavedNote = output.filter((note) => note.id !== req.params.id);
      console.log(SavedNote)
      fs.writeFile('./db/db.json', JSON.stringify(output), (error) => {
        console.log(notes)
        error ? console.error(error) : res.json(JSON.parse(notes))
          res.json(SavedNote);
      });
  });
});

module.exports = apiRouter;