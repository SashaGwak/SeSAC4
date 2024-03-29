const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// serve static files
app.use(express.static('public'));
app.use('/user', express.static(path.join(__dirname, '/public')));
/* path.join([...paths])

사용 예시
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
Returns: '/foo/bar/baz/asdf' 

+ path를 쓰는 이유는 /에 상관없이 주소조합을 도와줌

__filename : 현재 실행중인 파일 경로
__dirname : 현재 실행중인 폴더 경로 
*/

app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());

const Router  = require('./routes');
// router를 정의해주는 파일명을 index.js로 만들었기 때문에 파일명만 써도 router를 가져올 수 있음 
app.use('/user', Router);
// 경로의 시작이 /user와 동일하면 Router를 찾아감 
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