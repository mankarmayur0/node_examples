console.log("App.js Starting!!");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
console.log(notes.addValue(5, -2));

// fs.appendFile( "TestFile.txt", `"HEllo  ${os.userInfo().username} !`, function(err) {
//     if(err) {
//         console.log("Error occured while creating a file");
//     }
// } );