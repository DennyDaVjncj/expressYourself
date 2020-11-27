//server configuration:
const xprssPack=require('express');
const xprssApp=xprssPack();
const effThis=require('fs');
const shiningPath=require('path');
const CHANNEL=process.env.CHANNEL||7498;

//configuring data handling/parsing:
xprssApp.use(xprssPack.urlencoded({extended:true}));
xprssApp.use(xprssPack.json());
//these routes handle user requests
require('./routes/apiRoutes')(xprssApp);
require('./routes/htmlRoutes')(xprssApp);

//bringing server online:
xprssApp.listen(CHANNEL,()=>{
    console.log('sever connection successful: '+CHANNEL);
})
