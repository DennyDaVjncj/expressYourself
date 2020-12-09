//server configuration:
const xprssPack=require('express');
const xprssApp=xprssPack();//xprssPack weaponized
const PORT=process.env.PORT||7498;

//configuring data handling/parsing:
xprssApp.use(xprssPack.urlencoded({extended:true}));
xprssApp.use(xprssPack.json());
xprssApp.use(xprssPack.static("public"));
//these routes handle user requests
require('./routes/apiRoutes.js')(xprssApp);
require('./routes/htmlRoutes.js')(xprssApp);

//bringing server online:
xprssApp.listen(PORT,()=>{
    console.log('server online via channel: '+PORT);
});