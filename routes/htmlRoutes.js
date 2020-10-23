//npm dependencies 
const path = require("path");

//export html requests to server.js
module.exports = function(app) {
    // HTML GET Requests, handles when user "visits" a page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};