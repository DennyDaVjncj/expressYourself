//server configuration:
const xprssPack=require('express');
const xprssApp=xprssPack();
const CHANNEL=process.env.CHANNEL||7498;

//configuring data handling/parsing:
xprssApp.use(xprssPack.urlencoded({extended:true}));
xprssApp.use(xprssPack.json());
xprssApp.use(xprssPack.static("public"));
//these routes handle user requests
require('./routes/apiRoutes.js')(xprssApp);
require('./routes/htmlRoutes')(xprssApp);
// require('./db/db.json')(xprssApp);//random thought that did have a positive impact

//bringing server online:
xprssApp.listen(CHANNEL,()=>{
    console.log('server online via channel: '+CHANNEL);
})