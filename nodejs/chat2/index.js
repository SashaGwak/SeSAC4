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

var list = {};
io.on('connection', function (socket) {
    console.log('connected', socket.id);
    socket.emit('info', socket.id);
    // 들어온 기록 받기
    socket.on('info2', function(data) {
        list[socket.id] = data.nickname;
        // list 딕셔너리에 id: nickname 추가
        io.emit('notice', {nickname:data.nickname , msg:'님이 입장하셨습니다.'});
        io.emit('list', list);
        // 현재 입장리스트 보내주기
    })

    // 아이디 값 보내줌
    socket.on('send', function(data) {
        // data = { msg: ~~~~ , to: nickname };
        // console.log('client message : ', data.msg ); 
        // console.log('To message : ', data.to ); 
        data["is_dm"] = false; 
        // 디엠인지 구분하는 내용 데이터에 추가
        data['nickname'] = list[socket.id]; 
        // 소켓 아이디로 저장된 닉네임을 찾아서 닉네임을 data에 추가로 넣어준 것 
        // data = { msg: ~~~~ , to: nickname, is_dm: false, nickname: 내 닉네임};
        if (data.to == '전체') {
            io.emit('newMessage', data);
        } else {
            data["is_dm"] = true; 
            let socketID = Object.keys(list).find(k => list[k] === data.to );
            // 얘가 하나씩 돌면서 우선 키를 확인 k에는 딕셔너리에있는 키들이 하나씩 들어옴 list[k] = value = to 인것을 찾는 것
            // find가 찾아서 값이 같으면 그 값을 리턴해줌(여기서는 키값을 리턴해주는 것)
            io.to(socketID).emit('newMessage', data);
            socket.emit('newMessage', data);
            // 지정한 한명과 나한테만 보내주는 것 
        }
    })
    

    // 나간 기록 보내기 
    socket.on('info2', function(data) {
        socket.on('disconnect', function () {
            io.emit('notice', {nickname:data.nickname , msg:'님이 퇴장하셨습니다.'});
            delete list[socket.id];
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