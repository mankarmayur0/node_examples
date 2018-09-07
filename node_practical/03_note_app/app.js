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
    notes.addNote(argsY.title, argsY.message);
} else if( command === 'read' ) {
    notes.getNote(argsY.title);   
} else if( command === 'remove' ){   
    notes.removeNote(argsY.title);
} else {
    console.log("Entered command not recognized.");    
}

