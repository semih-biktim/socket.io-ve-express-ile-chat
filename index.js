const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

const io = socket(server);

io.on("connection",(socket) => {
	socket.on("mesaj_gonder",data => {
		io.sockets.emit("mesaj_al",data);
	});
});



