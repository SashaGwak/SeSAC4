const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( express.urlencoded({extended: false}));
// 데이터 인코딩 방식 설정, false를 하면 object 뎁스가 있는 값일 경우 뎁스를 잘 나누어서 값을 보내준다
app.use( bodyParser.json());
// express 서버가 데이터를 받을 때 json 형태로 받겠다고 미리 선언한 것

app.get('/', function(req,res) {
    res.render('practice2_index');
});

app.post('/login', function(req,res) {
    res.render('practice2_receive');
    fs.writeFile('./info.txt', req.body.name+'//'+req.body.id+'//'+req.body.password);
});

app.listen(port, () => {
    console.log('Server Port : ', port);
});