const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+"/public"));

const userRoute = require('./routes/user-route');
const indexRoute = require('./routes/index-route');

//app.use('/', indexRoute);
app.use('/user1', userRoute);

app.listen(port, ()=>console.log("running..."));
