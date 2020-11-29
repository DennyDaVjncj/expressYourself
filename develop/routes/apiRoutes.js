//this file will serve to create the pathway for data transers

const userInput=require('../db/db.json')
const effThis=require('fs');

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,rec)=>{
        rec.json(userInput);
    })
    xprssApp.get('/api/*',(ask,rec)=>{
        rec.json(userInput);
    })
}

//getNotes from dbJson file - complete!
    //getNote from ask.body which contains info from front end ajax call
    //add id to ask.body(note)
    //pust note to userInput
    //effThis.writeFile(db.json,userInput)