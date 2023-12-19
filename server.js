const express = require("express");
const app = express();

const apiRouter = require("./routes/apiRouter");
const htmlRouter = require("./routes/htmlRouter");

const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});

module.exports = app;