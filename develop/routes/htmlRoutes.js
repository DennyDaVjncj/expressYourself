const shiningPath=require('path');

module.exports=xprssApp=>{
    xprssApp.get('/notes',(ask,rec)=>{
        rec.sendFile(shiningPath.join(__dirname,'../public/notes.html'));
    })
    xprssApp.get('*',(ask,rec)=>{
        rec.sendFile(shiningPath.join(__dirname,'../public/index.html'))
    })    
}
