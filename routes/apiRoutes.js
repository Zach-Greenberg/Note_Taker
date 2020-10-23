//dependencies
const db = require("../db/db.json");
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