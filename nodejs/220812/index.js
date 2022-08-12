const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.use(cookieParser('1234'));

// express는 쿠키가 res모듈에 있습니다!!
// 1. 패키지 설치하기 
// npm i cookie-parser
// 2. 패키지 불러오기 
// const cookieParser = require('cookie-parser');
// 3. cookieParser 사용
// app.use(cookieParser(secret)); 

const cookieConfig = {
    maxAge : 30000, 
    // 30초 
    path: '/', 
    httpOnly : true,
    // true로 지정하면 웹 서버만 접근할 수 있게 됨 -> document.cookie사용 불가
    signed: true, 
    // true면 쿠키의 value를 암호화하는 것
}; 

app.get("/", (req,res) => {
    res.cookie('key', 'value', cookieConfig); 
    res.cookie('key2', 'value2', cookieConfig); 
    // 첫번째 보내는 게 key, 두번째가 value가 된다 
    // 옵션은 딕셔너리 형태로 보낼 수 있음 
    res.render('index');
});

// 쿠키 출력해보기
app.get('/get', (req, res) => {
    console.log('여긴 get: ', req.cookies);
    res.send(req.cookies);
})

// 쿠키 가져와보기 document.cookie
app.get('/cookie', (req, res) => {
    res.render("cookie");
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});