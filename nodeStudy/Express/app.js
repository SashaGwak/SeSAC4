const http = require('http'); 

const express = require('express');

const app = express();

const server = http.createServer(app);

const port = 8000;

// app.use: (...handlers: RequestHandler[]) => Express 
// use를 사용하면 요청 핸들러 배열을 여기에 받아들이며 다른 사용방법도 있음
// 사용예시 1 
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); 
    // next 를 실행해야 다음 루트인 In another middleware!로 갈 수 있음
}); 
// 모든 들어오는 요청마다 실행

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>')
}); 

server.listen(port, () => {
    console.log('Server start : ', port);
});