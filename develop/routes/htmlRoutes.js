const shiningPath=require('path');

module.exports=xprssApp=>{
    xprssApp.get('/notes',(ask,echo)=>{
        echo.sendFile(shiningPath.join(__dirname,'../public/notes.html'));
    })
    xprssApp.get('*',(ask,echo)=>{
        echo.sendFile(shiningPath.join(__dirname,'../public/index.html'))
    })
}
