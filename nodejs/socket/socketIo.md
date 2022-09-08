# socket.io 사용방법
## socket.io 패키지 설치 
## HTML 
* socket.on은 듣는 것 -> socket.on('이벤트명', 콜백함수)
* socket.emit은 보내는 것 -> socket.emit('이벤트명', 보낼 정보)
```html
<!-- socket.io cdn 적어주기 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js"></script>

<!-- 스크립트 내 소켓 객체 생성 및 이벤트 정해주기 -->
<script>
// 소켓 객체 생성
var socket = io.connect();

/* connect는 연결되면 실행되는 정해진 이름 */
socket.on('connect' , function() {
    console.log('server connected');
}); 


// socket.on 은 소켓을 받겠다(read 하겠다)
// socket.on('이벤트명', 콜백함수)
socket.on('hello' , function(data) {
    console.log('data :', data);
})

// 클릭 이벤트 함수
function btnClick(){
    socket.emit('btnClick', 'Click!!!'); 
}
socket.on('clickResponse', function(data) {
    console.log('respnse :', data); 
})
</script>
```

## index.js 
```js
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
    // app 쓰는 거는 그래도 일일히 경로 써주고 싶지 않기때문~~ 
})


// on = 읽는거 , emit = 보내는 것 
/* 
io = socket.io 객체를 불러와서 connection(연결)되면 socket(방개념)생성 되도록 함
따라서 소켓 사용할 수 있게 되는데 socket이란 변수명은 달라도 되지만 헷갈리지 않게 socket씀 

html에서 쓴 io.connect()를 받아 connection 되어서 connected 출력되게 됨
connection은 연결되면 실행되는 그냥 정해진 이름 
*/
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

```
