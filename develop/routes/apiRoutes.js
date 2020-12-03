const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');
const {v4:uuidv4}=require('uuid');
const shiningPath=require('path');
const until=require('util');
let id=uuidv4();

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        //if else condition that checks for error, if none, than I progrsss with 'effThis.writeFile('../db/db.json)'
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        echo.json(userInput);
        let newNote=ask.body;        
        newNote.id=id;
        userInput.push(newNote);        
        effThis.writeFileSync('./db/db.json', JSON.stringify(userInput));
    })
    xprssApp.delete('/api/notes/:id',(ask,echo)=>{
        echo.json(userInput);
        let recycable=ask.body.id;
        
        effThis.readFile(shiningPath.join('./db/db.json'),(misfortune,reverb)=>{
            console.log(reverb);
            if(misfortune)throw misfortune;
            return recycable;
        })    
    })
}