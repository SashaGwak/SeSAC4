// http 모듈
// 3가지 객체 server 객체, request 객체, response 객체 
const http = require('http');

const server = http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    // response 응답할 때 응답을 200으로 보내겠다는 것!
    res.write('<h1>hi</h1>');
    // 응답 내용을 적는거...? 
    res.end("<p>안녕</p>");
    // 응답을 할 때 어떤 내용이 보내도록 정해주는 것
});

server.listen(8000, function() {
    console.log('8000번 포트');
})

server.on('request', function() {
    console.log('Client Request');
})
server.on('connection', function() {
    console.log('Client Connection');
})
server.on('checkContinue', function() {
    console.log('Client checkContinue');
})