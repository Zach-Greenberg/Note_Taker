//dependencies
let db = require("../db/db.json");
const fs = require('fs');

//add to note array
function addNote(notes){
  let Note = [];
  for (let i = 0; i < notes.length; i++) {
    let writeNote = notes[i];
    writeNote.id = i + 1;
    Note[i] = writeNote;
  }
  return Note;
}
//save array
function writeNote(notes){
  fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
    if (err) throw err;
  });
}

//routing
module.exports = function(app) {
    // API GET request
    app.get("/api/notes", function(req, res) {
      res.json(db);
    });
  
    //API POST
    app.post("/api/notes", function(req, res) {
      //newNote from request
      const newNote = req.body;
      //add new note
      db.push(newNote);
      //set note in array
      db = addNote(db);
      //save note to json file
      writeNote(db);
      res.json(newNote);
    });
  };