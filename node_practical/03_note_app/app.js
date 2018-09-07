console.log("App.js Starting!!");

const fs = require('fs');
const _ = require("lodash");

const notes = require('./notes.js');

var command = process.argv[2];

console.log(command);

if( command === 'list' ) {
    console.log("Display list of notes.");
} else if( command === 'add' ) {
    console.log("Adding a Note");    
} else if( command === 'read' ) {
    console.log("Reading a note");    
} else if( command === 'remove' ){
    console.log("Remove a note");    
} else {
    console.log("command not recognized.");    
}

