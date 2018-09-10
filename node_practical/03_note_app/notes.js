console.log("Starting notes.js");

const fs = require('fs');

var getNotes = () => {
    try {
        var fetchNoteString = fs.readFileSync("noteFiles.json");
        return JSON.parse(fetchNoteString);
    } catch(error){
        console.log("No such file");
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync("noteFiles.json", JSON.stringify(notes));
}

addNote = (title, body) => {
    var notes = getNotes();
    var note = {title: title, body: body};

    try {
        var fetchNoteString = fs.readFileSync("noteFiles.json");
        notes = JSON.parse(fetchNoteString);
    } catch(error){
        console.log("No such file");
    }    
    var duplicateNotes = [];
    duplicateNotes = notes.filter((note) => note.title === title);    
    
    if( duplicateNotes.length === 0 ) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

getAll = () => {
    console.log("Display list of note");    
}

removeNote = (title) => {
    var notes = getNotes();
    var duplicateNotes = notes.filter((note) => note.title !== title);
    
    return duplicateNotes.length !== notes.length;
}

getNote = (title) => {
    var notes = getNotes();
    var duplicateNotes = notes.filter((note) => note.title === title);
    return duplicateNotes[0];
}

logNote = (note) => {
    console.log("----");
    console.log("title:", note.title);
    console.log("body:", note.body);
}

module.exports =  {
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote
}