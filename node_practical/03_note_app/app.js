console.log("Starting App.js !!");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argsY = yargs.argv;
var command = argsY._[0];

if( command === 'list' ) {
    notes.getAll();
} else if( command === 'add' ) {    
    var note = notes.addNote(argsY.title, argsY.body);
    if(note) {
        console.log("Node is successfully added");
        console.log("----");
        console.log("title:", note.title);
        console.log("body:", note.body);
    } else {
        console.log("Note failed to add");        
    }

} else if( command === 'read' ) {
    notes.getNote(argsY.title);   
} else if( command === 'remove' ){   
    var removedTitle = notes.removeNote(argsY.title);
    if(removedTitle) {
        console.log("Note successfully removed with title:", removedTitle);        
    } else {
        console.log(argsY.title + " titled note not available.");        
    }

} else {
    console.log("Entered command not recognized.");    
}

