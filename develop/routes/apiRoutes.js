const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');
const {v4:uuidv4}=require('uuid');
const shiningPath=require('path');
const until=require('util');
const { Script } = require('vm');
let id=uuidv4();

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        effThis.readFile(shiningPath.join(__dirname,'../db/db.json'), (misfortune,reverb)=>{            
            if(misfortune) throw misfortune;
            echo.json(JSON.parse(reverb));
        })
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;        
        newNote.id=id;
        userInput.push(newNote);        
        effThis.writeFileSync('./db/db.json', JSON.stringify(userInput));
    })
    xprssApp.delete('/api/notes/:recycable',(ask,echo)=>{
        let recycable=ask.params.recycable;
        console.log(recycable);
               
        effThis.readFile(shiningPath.join(__dirname,'../db/db.json'),(misfortune,reverb)=>{            
            if(misfortune) throw misfortune;

            const notes = JSON.parse(reverb);

            // Filter notes so that it removes the one matching id = recycable, save the filtered notes to a variable
            // Write db.json again with new filtered notes.
            // return res.json(true); 
        })    
    })
}