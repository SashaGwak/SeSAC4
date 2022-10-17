import http from 'http';
import Websocket, {WebSocketServer} from 'ws';
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

function handleConnection(socket) {
    console.log(socket)
}

server.listen(3000, handleListen);

// app.listen(3000, () => {
//     console.log('server start!');
// });

