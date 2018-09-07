console.log("App.js Starting!!");

const fs = require('fs');
const os = require('os');
const _ = require("lodash");
const notes = require('./notes.js');

console.log(notes.addValue(5, -2));
console.log(_.isString("Mayur"));
console.log(_.isString(true));
console.log(_.uniq(["Mayur",1,1,'mayur',2,5,7,'1']));


// fs.appendFile( "TestFile.txt", `"HEllo  ${os.userInfo().username} !`, function(err) {
//     if(err) {
//         console.log("Error occured while creating a file");
//     }
// } );