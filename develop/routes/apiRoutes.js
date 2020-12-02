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
        let ID=uuidv4();
        newNote.ID=ID;
        userInput.push(newNote);        
        effThis.writeFileSync('./db/db.json', JSON.stringify(userInput));
    })

    let param=ID;
    console.log(param);
    xprssApp.delete('/api/notes: '+param,(ask,echo)=>{
        echo.json(userInput);
        // console.log(echo.json(userInput));
    })
}    

//getNotes from dbJson file - complete!
    //getNote from ask.body which contains info from front end ajax call
    //add id to ask.body(note)
    //pust note to userInput
    //effThis.writeFile(db.json,userInput)