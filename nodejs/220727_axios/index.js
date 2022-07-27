const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( express.urlencoded({extended: true}))
app.use( bodyParser.json());

app.get('/', function(req,res) {
    res.render('index');
});

app.post('/login', function(req,res) {
    console.log(req.body);
    let name = req.body.name;
    let msg = req.body.name + '님 회원가입이 완료되었습니다!🥰'
    res.send({name:name, message:msg});
});

app.listen(port, () => {
    console.log('Server Port : ', port);
});