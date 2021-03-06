var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ //Listen on the connection event for incoming sockets, and log it to the console
    console.log('a user connected');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg); //Send to everyone, including sender
    });
});

http.listen(3000, function(){
    console.log('Hello, there! Let\'s listen on :3000');
});
