console.log("Starting notes.js");

addNote = (title, message) => {
    console.log("Added note with", title, message);
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