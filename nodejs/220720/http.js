// http 모듈
// 3가지 객체 server 객체, request 객체, response 객체 
// server : 웹서버를 생성할때 사용하는 객체 
// request : 응답 메세지를 작성할 때 첫번째 매개변수로 전달되는 객체 
// response : 응답 메세지를 작성할 때 두번째 매개변수로 전달되는 객체 
const http = require('http');

const server = http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    // response 응답할 때 응답을 200으로 보내겠다는 것!(응답 헤더 작성)
    res.write('<h1>hi</h1>');
    // 응답 본문 작성
    res.end("<p>안녕</p>");
    // 응답 본문 작성 후 응답 종료 !!!
});

server.listen(8000, function() {
    console.log('8000번 포트');
})
// listen(port, callback)
// 서버를 첫번째 매개변수의 포트로 실행한다

server.on('request', function() {
    console.log('Client Request');
})
server.on('connection', function() {
    console.log('Client Connection');
})
server.on('checkContinue', function() {
    console.log('Client checkContinue');
})