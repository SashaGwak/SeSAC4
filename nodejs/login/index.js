const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());

app.get('/', function(req,res) {
    res.render("index");
});

app.post('/login', function(req,res) {
    console.log(req.body);
    fs.readFile('./info.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('fs error');
        } else {
            var info = data.split('//');
            var id = info[0];
            var pw = info[2];
            res.send({id:id, pw:pw})
            // axios 안쓰면 원래 이렇게 해줬음!!
            // if ((req.body.id === info[0]) && (req.body.pw === info[2])) {
            //     res.send("<script>alert('로그인 성공!');</script>");
            // } else {
            //     res.send("<script>alert('아이디와 비밀번호를 확인해주세요!');</script>");
            // }
        }
    })
});

app.listen(port, function() {
    console.log('Server port : ', port); 
});