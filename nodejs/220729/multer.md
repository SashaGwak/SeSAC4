## 미들웨어
* 클라이어트와 서버가 요청과 응답을 할 때 중간에서 거쳐가는 함수
* 미들웨어에서는 request, response 객체를 모두 사용가능하고 next() 함수를 이용해 다음 미들웨어로 접근이 가능하다
```js
app.get('/', test, test2, function(req, res) {
    res.render('index');
});
function test(req, res, next) {
    console.log('test 함수');
    console.log(req.path);
    next();
}
function test2(req, res, next) {
    console.log('test2 함수');
    next();
}
```

## multer 
* 파일 업로드를 위해 사용되는 미들웨어 
* express로 서버를 구축할 때 가장 많이 사용되는 미들웨어
```html
    <!-- index.ejs -->
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <!-- 파일을 업로드하려면 무조건 enctype="multipart/form-data" 속성은 필수!!  -->
        <input type="file" name="userfile">
        <input type="text" name="name">
        <button>업로드</button>
    </form>
```
```js
// index.js 
const multer = require('multer');
const upload = multer({
    dest: "uploads/"
    // uploads/라는 경로에 파일을 올리겠다고 경로지정해주는 것
    // uploads파일 만들어주기~~ 

    // upload.single('userfile'): username으로 넘어온 파일 하나만 업로드하겠다! 
    // userfile 은 file input의 name 값이어야해! 
    app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.send('Upload');
})
});
```