const path = require("path");
const htmlRouter = require("express").Router();

// access information from the get request object: query, route, headers, request methods
htmlRouter.get("/", (req, res) => {
    const queryParamValue = req.query.paramName;
    const routeParamValue = req.params.paramName;
    const headerValue = req.get("HeaderName");
    const requestMethod = req.method;
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

htmlRouter.get("/notes", (req, res) => {
    const queryParamValue = req.query.paramName;
    const routeParamValue = req.params.paramName;
    const headerValue = req.get("HeaderName");
    const requestMethod = req.method;
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = htmlRouter;