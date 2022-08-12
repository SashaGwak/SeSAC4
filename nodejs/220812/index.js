const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const session = require('express-session'); 

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret : 'secret Key', // 필수
    // resave : false, 
    // // 계속 덮어쓸지 말지를 의미(변경되지 않았으면 다시 쓰지 않도록)
    // // false 변경되지 않았으면 새로 씌우지 않도록 함 
    // saveUninitalize: true,
    // 미리 세션을 만들어 놓도록 함
}))

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
    path: '/', // /로 시작하는 모든 경로에서 볼 수 있음
    // path를 설정하지 않으면 기본 /으로 설정됨
    httpOnly : true,
    // true로 지정하면 웹 서버만 접근할 수 있게 됨 -> document.cookie사용 불가
    // signed: true, 
    // true면 쿠키의 value를 암호화하는 것
    // 쿠키 시크릿 키를 사용하여 암호화
}; 

app.get("/", (req,res) => {
    req.session.name = '홍길동'; 
    res.cookie('key', 'value', cookieConfig); 
    res.cookie('key2', 'value2', cookieConfig); 
    // 첫번째 보내는 게 key, 두번째가 value가 된다 
    // 옵션은 딕셔너리 형태로 보낼 수 있음 
    res.render('index');
});

// 쿠키 출력해보기
app.get('/get', (req, res) => {
    console.log(req.session.name); 
    console.log(req.session);
    console.log('여긴 get: ', req.cookies);
    res.send(req.cookies);
})

// 쿠키 가져와보기 document.cookie
app.get('/cookie', (req, res) => {
    res.render("cookie");
})


app.get('/destroy', (req, res) => {
    req.session.destroy(function(err) {
        // 모든 세션을 지워주려면 destroy고
        console.log(req.session);
        res.send('삭제');
    })
    // req.session.name = ''; 
    // 하나의 세션만 지워주려면 빈값으로 설정해주면 된다
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id; 
        res.redirect('/profile');
    } else {
        res.redirect('/login');
    } 
});

app.get('/profile', (req, res) => {
    if (req.session.id == undefined || req.session.id == '') {
        res.redirect('/login');
        return false; 
    }
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});