//this file will serve to create the pathway for data transers
const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');
const {v4:uuidv4}=require('uuid');//not called to action
const { response } = require('express');//auto generated line
const shiningPath=require('path');
// let mineArray=[];//line 2 maybe fullfills this line
const indexScript=require('../js/index.js');

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;
        // console.log(newNote);
        activeNote+=newNote;
        let newId=uuidv4();
        // console.log(newId);
        userInput.push(activeNote);    
    })
}    

//getNotes from dbJson file - complete!
    //getNote from ask.body which contains info from front end ajax call
    //add id to ask.body(note)
    //pust note to userInput
    //effThis.writeFile(db.json,userInput)