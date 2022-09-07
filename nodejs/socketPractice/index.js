var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.get('/', function (req, res) {
    console.log('client'); 
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
    console.log('connected')
    socket.emit('hello', 'server hello')

    // 내가 푼 방식
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
    
    // 이벤트 하나로 받기
    var msg = {hello: '안녕하세요?', study: '공부하세요!', bye: '안녕히계세요^^'}
    socket.on('send', function(data){
        console.log('click :', data); 
        socket.emit('Response', data + " : " + msg[data]); 
    })
});

http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});