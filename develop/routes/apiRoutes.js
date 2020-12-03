const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');
const {v4:uuidv4}=require('uuid');
const shiningPath=require('path');
const until=require('util');
const { Script } = require('vm');
let id=uuidv4();
let recycable;//for use within delete rout

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);        
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;        
        newNote.id=id;
        userInput.push(newNote);        
        effThis.writeFileSync('./db/db.json', JSON.stringify(userInput));
    })
    xprssApp.delete('/api/notes/:'+`${recycable}`,(ask,echo)=>{
        echo.json(userInput);
        recycable=ask.body.id;
               console.log(recycable);
        effThis.readFile(shiningPath.join('../db/db.json'),(misfortune,reverb)=>{            
            if(misfortune)throw misfortune;
            return recycable;
        })    
    })
}