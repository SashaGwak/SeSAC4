const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( bodyParser.json());
// express 서버가 데이터를 받을 때 json 형태로 받겠다고 미리 선언한 것

app.get('/', function(req,res) {
    res.render('index');
});

app.get('/receive', function(req,res) {
    console.log('receive')
    res.render('index');
});

app.listen(port, () => {
    console.log('Server Port : ', port);
});