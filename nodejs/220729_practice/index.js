const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const multer = require('multer');
const path = require('path');
const upload = multer({
    // dest: "uploads/"
    // uploads/라는 경로에 파일을 올리겠다고 경로지정해주는 것
    // storage : 저장할 공간에 대한 정보 
    storage: multer.diskStorage({
        // diskStorage : 하드디스크에 업로드 파일을 저장하는 것
        destination(req, file, done) {
            //destination 저장할 경로
            done( null, 'uploads/'); 
            },
            filename(req, file, done){
                // filename 파일명
                const ext = path.extname(file.originalname);
                // 확장자만 추출
                done(null, req.body.name + ext);
                // 파일 이름 정해주기
            },
        }),
        // limits 파일 제한 
        // fileSize 파일 사이즈 제한
        limits: {fileSize: 5*1024*1024 },
});

app.set('view engine', 'ejs');
app.use( express.static('uploads'));
// static 파일 위치를 정해줘야함!! 
app.use( express.urlencoded({extended: true}))
app.use( bodyParser.json());

app.get('/', function(req,res) {
    res.render('index');
});

// upload.single('userfile'): username으로 넘어온 파일 하나만 업로드하겠다! 
app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);
    // file 정보 쓰기 위해서 꼭 req.file render해주기! 
    res.render('upload', req.file);
    // res.render('upload', {filename: req.file.filename}); 으로 써줘도 됩니다!! 
})


app.listen(port, () => {
    console.log('Server Port : ', port);
});