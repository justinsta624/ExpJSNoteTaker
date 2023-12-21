# ⭐ Express.js: Note Taker ⭐
    
![Contributor](https://img.shields.io/badge/Contributor-HanbyeolLee-purple)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/license/MIT)
![GitHub](https://img.shields.io/badge/GitHub-justinsta624-yellow)
![Test](https://img.shields.io/badge/Test-Jest@29.7.0-green)
![BackEnd](https://img.shields.io/badge/BackEnd-Express-magenta)
![Module](https://img.shields.io/badge/Module-Path@0.12.7-red)

## Outcome

Followings are the outcomes of the challenge 11:

* The URL of the functional, deployed application </br>
[Functional deployed application](https://expjsnotetaker-4a7157f09c49.herokuapp.com/) </br>
</br>

* The URL of the GitHub repository, with a unique name and a README describing the project </br>
[Repository for this challenge](https://github.com/justinsta624/ExpJSNoteTaker)
</br>

## What to expect for this challenge?

* Create an application called Note Taker that can be used to write and save notes.
* This application will use an Express.js back end and will save and retrieve note data from a JSON file.
* Deploy the entire application to Heroku.
* The application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.
* The following HTML routes should be created:
 `GET /notes` should return the `notes.html` file.
 `GET *` should return the `index.html` file.
* The following API routes should be created:
 `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
 `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file,
  and then return the new note to the client.
 `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete.
  To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
  and then rewrite the notes to the `db.json` file.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column,
plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other
existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the
right-hand column
```

## Helpful Resources for this challenge

* [How to deploy Heroku?](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)
* [Express.js: Response method](https://expressjs.com/en/guide/routing.html#response-methods)
* [Express.js: Route paths](https://expressjs.com/en/guide/routing.html#route-paths)
* [Express.Router](https://expressjs.com/en/guide/routing.html#express-router)
* [Middleware](https://expressjs.com/en/guide/writing-middleware.html)
* [Heroku with node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

## Review

You are required to submit BOTH of the following for review:
* The URL of the functional, deployed application.
* The URL of the GitHub repository, with a unique name and a README describing the project.

---
