var express = require("express");
var app = express();

// app.use(express.static("public"));

var server = require("http").createServer(app).listen(8080);

var io = require("socket.io").listen(server);

console.log(io.sockets);

io.sockets.on("connect", function(socket){
	console.log("Socket server connected");
	/*socket.emit("sendmsg", "Helo all");

	socket.on("sendmsg", function(data){
		console.log("got message");
		console.log(data);
	});*/
});