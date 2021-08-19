//npm install express >> install node modules
//node server.js >> start server
//terminal : npm install -g nodemon  >> install nodemon for auto restart server
//terminal : nodemon server.js  >> auto restart server command(when you save files)

// if securityException : power shell > executionpolicy 
// > set-executionpolicy unrestricted > y

//server set
const express = require('express');
const app = express();
app.listen(8081, function(){
    console.log('listening on 8081')
});

//url request, response
app.get('/me',function(req, res){
    res.send('me')
});

app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
});

app.get('/test',function(req, res){
    res.send('Hello!')
});