var express = require('express');
var app = express();
var http = require('http').Server(app);
var $ = require('jQuery');

var base = __dirname + '/';


app.set('view engine', 'ejs');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res){
	res.render('index');
	app.use("/public", express.static(__dirname + '/public/'));
	
});



var port = process.env.PORT || 5000;
   

http.listen(port);

  
