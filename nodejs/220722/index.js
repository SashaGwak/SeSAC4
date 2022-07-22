const express = require('express');
const app = express();
const port = 8000;

// app.use(express.static('public'));
// 경로를 안쓸 정적파일 관리하는 곳(public 디렉토리)을 지정해줌

app.use('/abc', express.static('public'));
// 정적 파일을 path를 어떻게 지정할 것인지

app.get('/', (req,res) => {
    res.send('Hello Express!');
})

app.listen(port, () => {
    console.log( 'Server port : ', port );
})