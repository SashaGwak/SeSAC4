const { query } = require('express');
var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log('client'); 
    res.render('main');
})

app.get('/chat', function (req, res) {
    console.log('chating', req.query.nickname); 
    res.render('chat', {name: req.query.nickname});
})

io.on('connection', function (socket) {
    console.log('connected', socket.id);
    socket.emit('info', socket.id);

    // 들어온 기록 받기 
    socket.on('name', function(name) {
        io.emit('notice', {name:name , msg:'님이 입장하셨습니다.'});
    });
    // 아이디 값 보내줌
    socket.on('send', function(data) {
        // data = {id: ~~~. msg: ~~~~ , name: ~~ };
        io.emit('newMessage', data);
    })
    

    // 나간 기록 보내기 
    socket.on('name', function(name) {
        socket.on('disconnect', function () {
            io.emit('notice', {name:name , msg:'님이 퇴장하셨습니다.'});
        });
    })

    // 이미 disconnect 되었으니 이 코드는 안되는거지!! 
    // socket.on('disconnect', function () {
    //     socket.on('name', function(name) {
    //         io.emit('notice', {name:name , msg:'님이 퇴장하셨습니다.'});
    //     });
    // })
});


http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});