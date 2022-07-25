const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());
// express 서버가 데이터를 받을 때 json 형태로 받겠다고 미리 선언한 것

app.get('/', function(req,res) {
    res.render('practice_index');
});

app.get('/receive', function(req,res) {
    console.log( req.body )
    console.log( req.query )
    // post는 body지만 get으로 하면 url 주소 내 query로 받기때문에 주의 !
    res.render('practice_receive', req.query);
});

app.post('/receive', function(req,res) {
    console.log( req.body )
    res.render('practice_receive', req.body);
});

app.listen(port, () => {
    console.log('Server Port : ', port);
});