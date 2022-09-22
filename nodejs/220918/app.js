const http = require('http');
// /로 시작하면 절대경로 ./로시작하면 상대경로
// 경로를 생략하면 http라는 글로벌 모듈을 찾게 되는 것 
const port = 3000;
const routes = require('./routes')

/*
createServer(requestListener (request, response) => void) : Sever
requestListener -> 들어오는 모든 요청을 실행하는 기능
*/
// 방법 1
// function rqListener(req, res) {
// }
// http.createServer(rqListener); 


// 방법 2 (익명함수)
// http.createServer(function(req, res) {

// });

// 방법 3 (화살표 함수 이용)
// createServer((req, res) => {
//})

const server = http.createServer(routes);

server.listen(port, () => {
    console.log('Server port : ', port);
});