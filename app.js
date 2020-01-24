const express = require('express');
const fs = require('fs');
const app = express();

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

var scripts = {
  "1.0":fs.readFileSync('like.html', 'utf-8')
}
app.get('/', function(req, res){
 fs.readFile('like.html', 'utf-8', function(err, data){
   res.send(data);
 });
});

app.get('/install', function(req, res){
  res.send(scripts["1.0"]);
});

app.listen(process.env.PORT);
//process.env.PORT
