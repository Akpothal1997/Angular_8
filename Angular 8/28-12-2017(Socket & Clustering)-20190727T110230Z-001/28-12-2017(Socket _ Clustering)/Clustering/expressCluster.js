// Clustring with express module node js

var express = require("express");

var cluster = require("express-cluster");


cluster(function(){
	var app = express();

	app.get("/", function(req, res){
		res.send("DOONE at " + process.pid);
	});

	return app.listen(8080, function(){
		console.log("server is listng at "+ process.pid);
	});
}, {count:5});
