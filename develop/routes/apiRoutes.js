//this file will serve to create the pathway for data transers
const userInput=require('../db/db.json')
const effThis=require('fs');
const textArea=require('../js/index.js');


module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);
    })
    xprssApp.get('/api/*',(ask,echo)=>{
        echo.json(userInput);
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        textArea.activenote.push()
    })
}

//getNotes from dbJson file - complete!
    //getNote from ask.body which contains info from front end ajax call
    //add id to ask.body(note)
    //pust note to userInput
    //effThis.writeFile(db.json,userInput)