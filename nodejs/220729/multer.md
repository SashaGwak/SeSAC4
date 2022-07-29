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
    ### 1.하나의 파일 업로드 하는 방법(upload.single)
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
    });
        // uploads/라는 경로에 파일을 올리겠다고 경로지정해주는 것
        // uploads파일 만들어주기~~ 

        // upload.single('userfile'): username으로 넘어온 파일 하나만 업로드하겠다! 
        // userfile 은 file input의 name 값이어야해! 
        app.post('/upload', upload.single('userfile'), function(req, res){
        console.log(req.body);
        console.log(req.file);
        res.send('Upload');
    }); 
    ```


    ### 2. 여러개 파일 한번에 업로드 하는 법(upload.array)
    ```html
    <!-- index.ejs -->
    <form action="/upload/array" method="POST" enctype="multipart/form-data">
        <input type="file" name="userfile" multiple>
        <!-- multiple은 다중파일 업로드를 할 수 있게 해준다 -->
        <button>업로드</button>
    </form>
    ```
    ```js
    // index.js 
    const multer = require('multer');
    const upload = multer({
        dest: "uploads/"
    });

    // array를 이용하면 파일이 넘어오는 곳이 req.file이 아니라 **req.files**가 된다!! 
    app.post('/upload/array', upload.array('userfile'), function(req, res){
        console.log(req.body);
        console.log(req.files);
        res.send('Upload Array');
    });
    ```

    ### 3. 여러개 파일 각자 올리는 방법(upload.fields)
    ```html
    <!-- index.ejs -->
    <form action="/upload/fields" method="POST" enctype="multipart/form-data">
        <input type="file" name="userfile">
        <input type="file" name="userfile2">
        <input type="file" name="userfile3">
        <!-- 파일 name 공통되지 않도록 주의 !  -->
        <button>업로드</button>
    </form>
    ```
    ```js
    // index.js 
    const multer = require('multer');
    const upload = multer({
        dest: "uploads/"
    });

    // fields에서는 name값 지정해주는 게 달라서 주의 !! 여러개 올리는게 번거로워서 많이쓰진 않음 
    app.post('/upload/fields', upload.fields([{name: 'userfile'}, {name: 'userfile2'}, {name: 'userfile3'}]), function(req, res){
        console.log(req.body);
        console.log(req.files);
        res.send('Upload Fields');
    })
    ```

    ### 4. 파일 업로드 제약 거는 방법
    ```js
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
                // 확장자 추출
                done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            },
        }),
        // limits 파일 제한 
        // fileSize 파일 사이즈 제한
        limits: {fileSize: 5*1024*1024 },
    });
    ```