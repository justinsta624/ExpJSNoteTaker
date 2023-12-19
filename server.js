const express = require('express');
const app = express();

const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');

const PORT = process.env.PORT || 3004;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api calling and the middleware
app.use(express.static('public'));
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});

module.exports = app;