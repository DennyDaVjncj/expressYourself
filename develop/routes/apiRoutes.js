//this file will serve to create the pathway for data transers
const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');//effThis.writeFile()-->this goes before the writefile method-->1st param is a string leading to our database, 2nd param is 
const {v4:uuidv4}=require('uuid');//not called to action
const { response } = require('express');//auto generated line
const shiningPath=require('path');
// let mineArray=[];//line 2 maybe fullfills this line
const until=require('util');
const readFileAsync = until.promisify(effThis.readFile);
const writeFileAsync = until.promisify(effThis.writeFile);

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;
        console.log(newNote);
        let newId=uuidv4();
        console.log(newId);
        newNote.newId=newId;
        userInput.push(newNote);

        // JSON.stringify(userInput)-->this will be second param within the writeFile();        
        
        
        //I need to stringify the json as I'm gearing up to 'writeFile()'
        

        // allNotes = effThis.readFileSync(userInput, "utf8");
        // allNotes = JSON.parse(allNotes)
        // let newNote=ask.body;       
        // let newId=uuidv4();
        // newNote.id=newId;
        // allNotes.push(newNote);
        // effThis.writeFileSync(shiningPath.join(__dirname, JSON.stringify(allNotes)));
        // echo.json(JSON.parse(allNotes));
    })
}    

//getNotes from dbJson file - complete!
    //getNote from ask.body which contains info from front end ajax call
    //add id to ask.body(note)
    //pust note to userInput
    //effThis.writeFile(db.json,userInput)