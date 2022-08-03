const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use( express.static('uploads')); 
app.use( express.urlencoded({extended: true}))
app.use( bodyParser.json());

const Router  = require('./routes');
// router를 정의해주는 파일명을 index.js로 만들었기 때문에 파일명만 써도 router를 가져올 수 있음 
app.use('/user', Router);
// 만약 '/'경로 들어오면 router 정보 가져오세용

/* 만약
index.js 파일 에서 
app.use('/app', router);
router/index.js 파일
router.get('/a', function(req, res) {
    res.send('Index');
})
-> 주소창은 localhost/app/a 로 경로 확인 */

app.listen(port, () => {
    console.log('Server Port : ', port);
});