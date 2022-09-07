const { query } = require('express');
var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    console.log('client'); 
    res.render('main');
})

app.get('/chat', function (req, res) {
    console.log('chating', req.query.nickname); 
    res.render('chat');
})
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