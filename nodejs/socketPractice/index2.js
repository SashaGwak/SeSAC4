var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.get('/', function (req, res) {
    console.log('client'); 
    res.sendFile(__dirname + '/index2.html');
})

// io -> 클라이언트와의 모든 연결을 갖고있는 친구 
// socket -> 클라이언트 한명. socket.id가 클라이언트를 구분하는 식별자
io.on('connection', function (socket) {
    console.log('connected', socket.id);
    socket.emit('info', socket.id);
    // 아이디 값 보내줌
    io.emit('notice', socket.id + '님이 입장하셨습니다.');
    socket.on('send', function(data) {
        // data = {id: ~~~. msg: ~~~~ };
        console.log('client message : ', data.msg); 
        io.emit('newMessage', data);
    })

    socket.on('disconnect', function(){
        io.emit('notice', socket.id +'님이 퇴장하셨습니다.');
    })
});


http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});