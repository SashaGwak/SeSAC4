# Cookie와 Session
## 1. Cookie 
* 웹 브라우저(클라이언트)에 저장되는 키와 값이 들어있는 작은 데이터 파일 
* 이름, 값, 만료일, 경로 정보로 구성
* 보는 방법 
    * 개발자 모드 -> 애플리케이션 -> 쿠키 에서 확인 가능 !
* 동작 방식 
    1. 클라이언트가 페이지를 요청
    2. 서버에서 쿠키를 생성
    3. HTTP 헤더에 쿠키를 포함 시켜 응답
    4. 브라우저가 종료되어도 쿠키 만료 기간이 있다면 클라이언트에서 보관하고 있음
    5. 같은 요청을 할 경우 HTTP 헤더에 쿠키를 함께 보냄 
    6. 서버에서 쿠키를 읽어 이전 상태 정보를 변경할 필요가 있을 때 쿠키를 업데이트 하여 변경된 쿠키를 HTTP 헤더에 포함시켜 응답 
* 사용 예시 
    * 자동 로그인, 팝업 오늘은 그만보기 등.. 

### 사용방법
1. 패키지 설치하기 
```bash
npm i cookie-parser
```
2. 쿠키 사용하기 
```js
// index.js
const cookieParser = require('cookie-parser');
app.use(cookieParser('1234')); 
// 쿠키 불러오기 
// '1234'는 secret -> 암호화할때 사용

// 쿠키 옵션 딕셔너리 형태로 지정!! 
const cookieConfig = {
    maxAge : 30000, 
    // 만료기간 -> 30초 
    path: '/', // /로 시작하는 모든 경로에서 볼 수 있음
    // path를 설정하지 않으면 기본 /으로 설정됨
    httpOnly : true,
    // true로 지정하면 웹 서버만 접근할 수 있게 됨 -> document.cookie사용 불가
    signed: true, 
    // true면 쿠키의 value를 암호화하는 것
    // 쿠키 시크릿 키를 사용하여 암호화
}; 

app.get('/', (req, res) => {
    res.cookie('key', 'value', cookieConfig);
    // 첫번째 보내는 게 key, 두번째가 value가 된다 
    // 옵션은 딕셔너리 형태로 보낼 수 있음 
    res.render('index');
});

// 쿠키 출력해보기
app.get('/get', (req, res) => {
    console.log('여긴 get: ', req.cookies);
    res.send(req.cookies);
});

// 쿠키 가져와보기 document.cookie
app.get('/cookie', (req, res) => {
    res.render("cookie");
})
```
```html
<!-- cookie.ejs -->
.
.
.
<script>
    console.log('쿠키 : ', document.cookie);
    // document.cookie 로 현재 쿠키들 불러올 수 있음
    document.cookie = "user=sesac; expires=Sat, 13 Aug 2022 13:00:00 GMT; path=/"; 
    // 쿠키 생성하기 key=value 값만 필수 
    
    // 쿠키 하나씩 출력해보기 
    var cookieArr = document.cookie.split("; ");
    for (var i in cookieArr){
        console.log( cookieArr[i]);
    }
</script>
.
.
.
``` 


## 2. Session
* 웹 서버에 저장되는 쿠키 
* 사용자가 웹 브라우저를 통해 접속한 시점부터 연결을 끝내는 시점까지의 시간동안 일련의 요구를 하나의 상태로 보고 그 상태를 유지시킨다. ex.로그인 유지
    * ->  따라서 브라우저를 끄면 연결이 사라진다 
* 동작 방식 
    1. 클라이언트가 서버에 접속 시 세션 ID를 발급 받습니다.
    2. 클라이언트는 세션 ID에 대해 쿠키를 사용해서 저장하고 가지고 있습니다. 
    3. 클라이언트는 서버에 요청할 때, 이 쿠키의 세션 ID를 서버에 전달해서 사용합니다.
    4. 서버는 세션 iD를 전달받아서 별다른 작업 없이 세션 ID로 세션에 있는 클라이언트 정보를 가져옵니다.
    5. 클라이언트 정보를 가지고 서버 요청을 처리하여 클라이언트에게 응답합니다. 

### 사용방법
1. 패키지 설치하기 
```bash
npm i express-session
```
2. 세션 사용하기 
```js
// index.js
const session = require('express-session'); 
app.use(session({
    secret : 'secret Key', // 필수
    resave : false, 
    // 계속 덮어쓸지 말지를 의미(변경되지 않았으면 다시 쓰지 않도록)
    // false 변경되지 않았으면 새로 씌우지 않도록 함 
    saveUninitalize: true,
    // 미리 세션을 만들어 놓도록 함
}))

// 쿠키 옵션 딕셔너리 형태로 지정!! 
const cookieConfig = {
    maxAge : 30000, 
    // 만료기간 -> 30초 
    path: '/', // /로 시작하는 모든 경로에서 볼 수 있음
    // path를 설정하지 않으면 기본 /으로 설정됨
    httpOnly : true,
    // true로 지정하면 웹 서버만 접근할 수 있게 됨 -> document.cookie사용 불가
    signed: true, 
    // true면 쿠키의 value를 암호화하는 것
    // 쿠키 시크릿 키를 사용하여 암호화
}; 

app.get('/', (req, res) => {
    req.session.name = '홍길동'; 
    // session.name 지정
    res.render('index');
});

// 세션 출력해보기
app.get('/get', (req, res) => {
    console.log(req.session.name); 
    console.log(req.session);
    res.send(req.session);
});

// 세션 지우기
app.get('/destroy', (req, res) => {
    req.session.destroy(function(err) {
        // 모든 세션을 지워주려면 destroy고
        console.log(req.session);
        res.send('삭제');
    })
    // req.session.name = ''; 
    // 하나의 세션만 지워주려면 빈값으로 설정해주면 된다
});
```


3. 사용예시 
```js
// 로그인 시스템 index.js 만들어본 것
app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    var flag = true;
    if (flag) {
        // session id랑 body.id 와 같다면 -> profile로 가도록 
        req.session.id = req.body.id; 
        res.redirect('/profile');
    } else {
        res.redirect('/login');
    } 
});

app.get('/profile', (req, res) => {
    // 프로파일로 들어갔더라도 id 지정되지 않았다면 다시 로그인 창으로 보내버리기! 
    if (req.session.id == undefined || req.session.id == '') {
        res.redirect('/login');
        return false; 
    }
})
```
## 3.쿠키와 세션의 차이점 
* 전체적인 역할과 동작 원리는 비슷(세션 = 서버 쿠키)
* 쿠키 - 로컬, 세션 - 서버 
* 보안 
    * 세션이 더 보안이 좋다
* 속도  
    * 쿠키가 조금 더 우수(클라이언트에 저장되어 있어서, 세션은 서버에 요청을 보내서 ID를 기반으로 찾아야함) 