const userInput=require('../db/db.json');//stores notes
const effThis=require('fs');
const {v4:uuidv4}=require('uuid');//node pack
const shiningPath=require('path');

module.exports=xprssApp=>{
    xprssApp.get('/api/notes',(ask,echo)=>{
        effThis.readFile(shiningPath.join(__dirname,'../db/db.json'),(misfortune,reverb)=>{            
            if(misfortune) throw misfortune;
            echo.json(JSON.parse(reverb));
        })
    })
    xprssApp.post('/api/notes',(ask,echo)=>{
        let newNote=ask.body;                      
        newNote.id=uuidv4()
        userInput.push(newNote);        
        effThis.writeFileSync('./db/db.json', JSON.stringify(userInput));
        echo.json(userInput);
    })
    xprssApp.delete('/api/notes/:id',(ask,echo)=>{       
            const diary=ask.params.id;            
            const pages=userInput.filter(tornPage=>{
                return tornPage.id!==diary;
            })
            console.log(pages);
            effThis.writeFileSync('./db/db.json', JSON.stringify(pages))          
            echo.json(pages);
    })
}