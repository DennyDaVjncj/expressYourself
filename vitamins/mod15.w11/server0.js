let xprssPack=require('express');
let app=xprssPack()

let CHANNEL=process.env.CHANNEL||3967;

//here, I'm setting up the exprsssApp to handle data parsing
app.use(xprssPack.urlencoded({extended:true}));
app.use(xprssPack.json());

require('./routes/apiRoutes0')(app);
require('./routes/htmlRoutes0')(app);

//here we programm our server to 'listen' actively
app.listen(CHANNEL,()=>{
    console.log(chalk.green('server active on: '+CHANNEL));
})