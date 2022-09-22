const fs = require('fs');

function requesHandler(req, res) {
    // console.log(req.url , req.method, req.headers);
    // process.exit();
    // 프로세스 중지(대게는 서버 중지하지 않기때문에 쓸일 거의 없음)
    // 이벤트 루트를 종료시켜 버림 
    const url = req.url; 
    const method = req.method; 

    if (url == '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();
        // 이후 다른 리스폰스 호출되서는 안되기 때문 
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // data 이벤트 리스너 생성
        req.on('data', (chunk) => {
            console.log(chunk);
            // <Buffer 6d 65 73 73 61 67 65 3d 61 73 64> 이런식으로 출력 
            body.push(chunk);    
        });
    
        return req.on('end', () => {
            // 전역에서 사용가능한 Buffer 객체 사용하여 새 buffer 생성
            const parseBody = Buffer.concat(body).toString();
            // 버퍼 안에 위에서 모은 모든 청크 추가해줌(어차피 파일이나 이런거 안들어오고 문자열 입력해줄거니까 toString으로 바꿔줌~~)
            console.log(parseBody);
            // message=asdf로 출력 
            const message = parseBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            // Sync는 기본적으로 동기화방식 -> 이렇게하면 만약 여기서 오류 날경우 다 멈춰버리므로 좋지 않아
            fs.writeFile('message.txt', message, (err) => {
                // 지금은 error 다뤄주지 않을것. 딱히 잘못된 부분 없음 
    
                // 경로지정방법 1
                // res.writeHead();
                // writeHead : 한번의 몇가지 메타 정보를 작성할 수 있게하며 다음으로 경로 재지정을 의미하는 상태코드 302를 설정. 이후 JS 객체와 우리가 설정하길 원하는 헤더를 전달
                // 경로지정방법 2
                res.statusCode = 302; 
                res.setHeader('Location', '/'); 
                // 위치 다시 /로 옮겨주면서 Status Code 던져줌 
                return res.end();
            });
    
        });
    
    
    
    }
    res.setHeader('Content-Type', 'text/html'); 
    // setHeader : 새로운 헤더를 설정할 수 있음
    // Content-Type: 브라우저가 알고 이해하며 받아들이는 디폴드 헤더 
    // 두번째인자에 대응될 콘텐츠 유형 적어줌 -> 여기서는 응답의 일부가 될 콘텐츠 유형은 HTML이라는 정보 전달  
    
    res.write('<html>');
    // write는 response에 데이터를 기록할 수 있게 함
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    
    res.end(); // 응답을 끝내는 것을 알려줌. 이후에는 당근 respons주면 안됨!
}

// 객체를 내보내는 여러가지 방법
module.exports = requesHandler;

// module.exports = {
//     handler : requesHandler, 
//     someText : 'Some hard coded test', 
// }; 

// module.exports.handler = requesHandler; 
// module.exports.someText = 'Some text'; 

// exports.handler = requesHandler;
// exports.someText = 'Some hard coded test';

