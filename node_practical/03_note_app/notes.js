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
    
    if( duplicateNotes.length !== notes.length ) {
        saveNotes(notes);
        return title;
    }
}

getNote = (title) => {
    console.log("Read note ", title);    
}

module.exports =  {
    addNote,
    getAll,
    removeNote,
    getNote
}