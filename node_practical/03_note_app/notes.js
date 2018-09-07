console.log("Starting notes.js");

const fs = require('fs');

addNote = (title, body) => {
    console.log("Added note with", title, body);
    var notes = [];
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
        fs.writeFileSync("noteFiles.json", JSON.stringify(notes));
    }
}

getAll = () => {
    console.log("Display list of note");    
}

removeNote = (title) => {
    console.log("Note removed ", title);
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