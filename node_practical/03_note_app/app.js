const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe:"Set Title",
    demand: true,
    alias: 't'
}

var argsY = yargs.command("add", "Add a new Note", {
    title:titleOptions,
    body: {
        describe:"Set the body",
        demand: true,
        alias: "b"
    }
}).command('list', 'List the number of notes.')
.command('remove', 'Remove a Note.', {title: titleOptions})
.command('read', 'Read a note', {title: titleOptions})
            .help()
            .argv;
var command = argsY._[0];

if( command === 'list' ) {
    var allNotes = notes.getAll();
    console.log(`Printing Number of notes ${allNotes.length}.`);
    allNotes.forEach((note) => notes.logNote(note));
} else if( command === 'add' ) {    
    var note = notes.addNote(argsY.title, argsY.body);
    if(note) {
        console.log("Node is successfully added");
        notes.logNote(note);
    } else {
        console.log("Note failed to add");        
    }

} else if( command === 'read' ) {
    var note = notes.getNote(argsY.title);   
    if(note){
        console.log("Note Found"); 
        notes.logNote(note);       
    } else {
        console.log("Note not found.");
    }

} else if( command === 'remove' ){   
    var isNoteRemoved = notes.removeNote(argsY.title);
    if(isNoteRemoved) {
        console.log("Note successfully removed with title:", argsY.title);        
    } else {
        console.log(argsY.title + " titled note not available.");        
    }

} else {
    console.log("Entered command not recognized.");    
}

