//import express module
var express = require("express");

//create Rest Object
var app = express();

//Deploy the application
app.use(express.static("public"));


//create http server and listening the port no.8080
var server = require("http").createServer(app).listen(8080, function(){
	console.log("Socket server listing at 8080");
});


//socket server listening the port no.8080
var io = require("socket.io").listen(server);

//chat application implementation
io.sockets.on("connection", function(socket){
	socket.on("sendData", function(data){
		io.sockets.emit("chatreceive", data);
	});
});