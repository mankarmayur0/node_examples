const fs = require('fs');

originalNote = {
    title: 'Some Title',
    body: 'Some Body'   
};

fs.writeFileSync("note.json", JSON.stringify(originalNote));

var noteString = fs.readFileSync("note.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

