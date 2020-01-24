const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function(req, res){
 fs.readFile('like.html', 'utf-8', function(err, data){
   res.send(data);
 });
});

app.listen(3000);
//process.env.PORT
