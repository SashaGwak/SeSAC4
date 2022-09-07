var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.get('/', function (req, res) {
    console.log('client'); 
    res.sendFile(__dirname + '/index2.html');
})

io.on('connection', function (socket) {
    console.log('connected')
    socket.emit('hello', 'server hello')

    socket.on('hello', function(data){
        console.log('click :', data); 
        socket.emit('helloResponse', '안녕'); 
    })
    socket.on('study', function(data){
        console.log('click :', data); 
        socket.emit('studyResponse', '공부하자!'); 
    })
    socket.on('bye', function(data){
        console.log('click :', data); 
        socket.emit('byeResponse', '바이'); 
    })
});

http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});