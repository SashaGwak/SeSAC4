var express = require('express'); 
const { send } = require('process');
var app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.set('view engine', 'ejs');

// io -> 클라이언트와의 모든 연결을 갖고있는 친구 
// socket -> 클라이언트 한명. socket.id가 클라이언트를 구분하는 식별자
var list = {};
// id, nickname 저장해줄 딕셔너리 
io.on('connection', function (socket) {
    console.log('connected', socket.id);
    socket.emit('info', socket.id);
    // 아이디 값 보내줌
    socket.on('info2', function(data) {
        list[socket.id] = data.nickname;
        // { id:nickname ...}
        io.emit('notice', data.nickname + '님이 입장하셨습니다.');
        // io.to(아이디).emit
        io.emit('list', list);
        // 모든 유저정보 보내기
    });
    socket.on('send', function(data) {
        // data = { msg: "" , to: ""};
        console.log('client message : ', data.msg ); 
        data["is_dm"] = false; 
        // 디엠인지 구분 
        data['nickname'] = list[socket.id]; 
        // 소켓 아이디로 저장된 닉네임을 찾아서 닉네임을 data에 추가로 넣어준 것 
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

    socket.on('info2', function(data) {
        list[socket.id] = data.nickname;
        socket.on('disconnect', function(){
            io.emit('notice', data.nickname +'님이 퇴장하셨습니다.');
            delete list[socket.id];
        })
    })
});


app.get('/', function (req, res) {
    console.log('client'); 
    res.render('index2', {data: list});
})

http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});