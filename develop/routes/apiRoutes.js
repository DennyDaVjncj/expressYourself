//this file will serve to create the pathway for data transers
const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');//effThis.writeFile()-->this goes before the writefile method-->1st param is a string leading to our database, 2nd param is
const {v4:uuidv4}=require('uuid');
const shiningPath=require('path');
// let mineArray=[];//line 2 maybe fullfills this line, start seeking how I can make use thereof
const until=require('util');
// const readFileAsync = until.promisify(effThis.readFile); LEARNING ASSISTANT SUGGESTION
// const writeFileAsync = until.promisify(effThis.writeFile); LA SUGGESTION

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        //if else condition that checks for error, if none, than I progrsss with 'effThis.writeFile('../db/db.json)'
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;
        console.log(newNote);
        let newId=uuidv4();
        // console.log(newId);
        newNote.newId=newId;
        console.log(newId);
        userInput.push(newNote);
        console.log(userInput);

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