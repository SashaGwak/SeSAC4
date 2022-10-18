import http from 'http';
import { WebSocketServer } from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use('/public',express.static(__dirname + '/public'));

app.get('/', (req, res ) => res.render('home'));
app.get('/*', (req, res ) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocketServer({server});
// 이렇게 하면 http서버, websocket 서버 둘 다 돌릴 수 있음(꼭 이렇게 안해도 됨)

const sockets = [];

wss.on('connection', (socket) => {
  // 소켓 정보 저장 
  sockets.push(socket); 
  socket['nickname'] = 'Anon'; // 익명 값 주기 
  // 현재 소켓상태를 보여주기 위해
  // console.log(socket);
  console.log('Connected to Browser ✅');
  socket.on('close', () => console.log('Disconnected to the Browser ❌')); 
  socket.on('message', (msg) => {
    // { type: 'nickname', payload: 'siha' }
    const message = JSON.parse(msg.toString()); 
    // message는 객체 형태, msg는 JSON 형태 
    console.log(message, msg.toString()); 
    // 연결된 socket들을 aSocket으로 표시하고 다 보내줌 
    switch (message.type) {
      case "new_message": 
        sockets.forEach((aSocket) => aSocket.send(`${socket.nickname} : ${message.payload}`));
      case "nickname": 
        // socket은 기본적으로 객체라서 원하는 내용 추가할 수 있음 
        socket["nickname"] = message.payload;
    }
    // socket.send(message.toString('utf8'));
    // console.log(message.toString('utf8'));
  });
});

server.listen(3000, handleListen);

// app.listen(3000, () => {
//     console.log('server start!');
// });

