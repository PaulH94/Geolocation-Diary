var express = require('express'); // do not change this line
//var parser = require('body-parser'); // do not change this line

var server = express();

//server.use(parser.urlencoded({ extended: false }));
server.get('/', function(req,res){

	res.sendFile(__dirname +'/index.html');

});
server.get('/contact.html', function(req,res){

	res.sendFile(__dirname +'/contact.html');

});

server.get('/signout.html', function(req,res){

	res.sendFile(__dirname +'/signout.html');

});
server.listen(process.env.PORT || 8080);
