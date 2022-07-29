const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const multer = require('multer');
const upload = multer({
    dest: "uploads/"
    // uploads/라는 경로에 파일을 올리겠다고 경로지정해주는 것
});

app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use( express.urlencoded({extended: true}))
app.use( bodyParser.json());

app.get('/', test, test2, function(req,res) {
    res.render('index');
});

// upload.single('userfile'): username으로 넘어온 파일 하나만 업로드하겠다! 
app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.send('Upload');
})

// array를 이용하면 파일이 넘어오는 곳이 req.file이 아니라 req.files가 된다!! 
app.post('/upload/array', upload.array('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload Array');
})

// fields에서는 name값 지정해주는 게 달라서 주의 !! 여러개 올리는게 번거로워서 많이쓰진 않음 
app.post('/upload/fields', upload.fields([{name: 'userfile'}, {name: 'userfile2'}, {name: 'userfile3'}]), function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload Fields');
})


function test(req, res, next) {
    console.log('test 함수');
    console.log(req.path);
    req.aaa = "....";
    next();
}
function test2(req, res, next) {
    console.log('test2 함수');
    console.log( req.aaa);
    next();
}

app.listen(port, () => {
    console.log('Server Port : ', port);
});