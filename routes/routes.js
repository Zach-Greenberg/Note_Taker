const fs = require("fs");
const path = require('path');

module.export = app => {
    const notes = [];

    app.get("/api/notes", function(req, res){
        res.json(notes)
    });

    app.post("/api/notes", function(req, res){
        notes.push(req.body)
    });
}