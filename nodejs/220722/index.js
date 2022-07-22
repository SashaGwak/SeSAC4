const express = require('express');
const app = express();
const port = 8000;

// ejs 사용법
app.set('view engine', 'ejs');
// view engine 으로 셋팅하면 views 디렉토리 내에 확장자가 ejs인 파일 이용한다는 것

// 미들 웨어 사용법
// app.use(express.static('public'));
// 경로를 안쓸 정적파일 관리하는 곳(public 디렉토리)을 지정해줌

app.use('/abc', express.static('public'));
// 정적 파일을 가상경로를 어떻게 지정할 것인지 정해줌

// express 사용법
app.get('/', (req,res) => {
    // render 사용할 때는 확장자 안적어도 된다
    res.render("test");
})

app.listen(port, () => {
    console.log( 'Server port : ', port );
})