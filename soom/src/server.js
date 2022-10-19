import http from 'http';
import SocketIO from 'socket.io';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use('/public',express.static(__dirname + '/public'));

app.get('/', (req, res ) => res.render('home'));
app.get('/*', (req, res ) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

// 개인룸, 공개룸 가져오기
function publicRooms() {
  // adapter에서 sids, rooms 빼주기
  const {
    sockets: {
      adapter: { sids, rooms }, 
    }, 
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      // 공개방 추가
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

wsServer.on('connection', (socket) => {
  socket['nickname'] = 'Anon';
  socket.onAny((event) => {
    console.log('__adapter', wsServer.sockets.adapter);
    console.log(`Socket Event: ${event}`);
  });
  socket.on('enter_room', (roomName, done) => {
    socket.join(roomName); // 방만들기 
    done();
    // 룸에만 보내는 메세지
    socket.to(roomName).emit('welcome', socket.nickname);
    // 전체 사람들에게 보내는 메세지
    wsServer.sockets.emit('room_change', publicRooms());
    /* 공부한 내용 */
    // console.log('__socket.rooms', socket.rooms); // 기본적인 자기 프라이빗 방
    // console.log('__roomName' , roomName);
    // socket.join(roomName); // 방만들기 
    // console.log('__socket.rooms', socket.rooms); // {socket id, 룸이름}
    // // 소켓이 어떤 방에 있는지 알기 위하여 socket.rooms을 씀
    // setTimeout(() => {
    //   done('hello from the backend'); // 파라미터 보내줄수있는 게 짱신기! 
    // }, 5000)
  });
  socket.on('disconnecting', () => {
    socket.rooms.forEach(room => socket.to(room).emit('bye', socket.nickname)); 
  }); 
  socket.on('disconnect', () => {
    wsServer.sockets.emit('room_change', publicRooms());
  })
  socket.on('new_message', (msg, room, done) => {
    socket.to(room).emit('new_message', `${socket.nickname} : ${msg}`);
    done();
  })
  socket.on('nickname', (nickname) => (socket['nickname'] = nickname));
});


/* ws 사용 부분 
import { WebSocketServer } from 'ws';

app.get('/', (req, res ) => res.render('wshome'));
app.get('/*', (req, res ) => res.redirect('/'));

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
*/ 

httpServer.listen(3000, handleListen);

// app.listen(3000, () => {
//     console.log('server start!');
// });

