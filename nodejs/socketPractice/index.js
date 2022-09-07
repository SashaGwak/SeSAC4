var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
/* 서버만 쓰는 거면 익스프레스만 써도 되는데 
소켓은 익스프레스 받지 못해서 http로 추가적으로 받아줘야 함 */
// http는 내장모듈 
// app 객체를 통해 만들었기 때문에 app 경로 사용해줄 수 있음 
var io = require('socket.io')(http); 
// 패키지 socket.io 불러오기 


app.get('/', function (req, res) {
    console.log('client'); 
    res.sendFile(__dirname + '/index.html');
    // ejs 패키지를 깔지 않았기때문에 경로 정해줌 
})

// on = 읽는거 , emit = 보내는 것 
io.on('connection', function (socket) {
    console.log('connected')
    socket.emit('hello', 'server hello')
    // emit('이벤트명', 보낼 데이터)  -> 보내주는 함수!!! 
    // 이벤트 헬로우로 서버헬로우라는 글자를 보낸다 
    /* html에서 이렇게 hello라는 동일한 이벤트명으로 받아주므로 data : server hello가 출력됨 
        socket.on('hello' , function(data) {
            console.log('data : ', data);
        })
    */
    socket.on('btnClick', function(data){
        console.log('client click'); 
        socket.emit('clickResponse', 'success'); 
        // 소켓을 통해서 보내면 내가 받은 애한테만 보냄(방 개념)
        io.emit('clickResponse', 'io success');
        // io를 통해서 보내면 내가 연결된 모든 클라한테 내용보냄 
        // io는 내가 지금 가지고 있는 모든 연결을 관리하고 있음
    })
});

http.listen(8000, function(){
    console.log( "Server Port : ", 8000 );
});