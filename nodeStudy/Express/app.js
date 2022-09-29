const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

/* 404 에러처리 */
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
    // 전송 전에 항상 status나 setHeader를 호출 할 수 있음
    // 여기서 status를 호출하면 상태코드 설정 가능
})

app.listen(port, () => {
    console.log('Server start : ', port);
});


/* 미들웨어 사용법
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
 */