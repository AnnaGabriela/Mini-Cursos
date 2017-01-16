var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	socket.on('novaMsg', function(m) {
		io.emit('novaMsg', m);
	});
});

app.set('view engine', 'ejs');

app.get('/', function(request, response){
	response.render('index');
});

http.listen(3000, function(){
	console.log('Estou Ouvindo!');
});
