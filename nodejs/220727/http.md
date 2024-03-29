## 비동기 HTTP 통신
폼의 데이터를 서버와 dynamic하게 송수신 하는 것


* dynamic 
    * 웹 문서가 정적으로 멈춰있는 것이 아니라 일부 내용이 실시간으로 변경되는 것

## 방법 
### 1. Ajax 
* Asynchoronous JavaScript And XML
* js를 이용해 클라이어트와 서ㅓ버간의 데이터를 주고받는 비동기 HTTP 통신
* 장점 
    * jquery를 통해 쉽게 구현 가능 
    * Error, Success, Complete의 상태를 통해 실행 흐름을 조절할 수 있다. 
* 단점
    * promise 기반이 아니다 
    * jquery를 사용해야만 간편하고 호환성이 보장된다(xml사용은 복잡)
* 기본 형식 
```js
var = serverAddress = 'http://localhost:3000';

$.ajax({
    url:serverAdress, 
    type: 'GET',
    success: function onData (data) {
        console.log(data);
    },
    error: function onError (error) {
        console.error(error);
    }
});
``` 


### 2. Axios
* Node.js와 브라우저를 위한 Promise API를 활용 
* 비동기 HTTP 통신이 가능, return이 Promise 객체로 온다 
* 장점 
    * Timeout 기능이 존재
    * promise 기반으로 만들어졌다 
    * 브라우저 호환성이 뛰어나다 
* 단점 
    * 모듈 설치 or 호출을 해줘야 사용이 가능하다 
* 기본 문법
```js
axios({
    method: 'post',
    // 통신방식 defaut 값은 get
    // get, post, patch, delete 가능
    url: 'https://localhost:3000/user',
    // form 서버에서의 action에 해당
    data: {
        userName; 'Cocoon',
        userId:'co1234',
        // {key:value} 형태로 작성 
    }
    // put, post, patch일 때는 data로 사용 ->req.body로 데이터 전송
    // get으로 받는 경우에는 data말고 
    // params: {? 뒤에 오는 쿼리 값들}으로 써줘야함 -> req.query로 데이터 전송
}).then((response) => console.log(response));
```
* 문법 - 응답 
```js
axios({
    method: 'get',
    url: 'www.naver.com',
})
.then(function(response) {
    console.log(response.data); 
    // 서버가 제공한 응답(데이터) 
    // 백에서는 res.send()를 이용해 데이터를 보낸다
    console.log(response.status);
    // 서버 응답의 HTTP 상태코드
    console.log(response.statusText);
    console.log(response.headers);
    // 서버가 응답한 헤더 
    console.log(response.config);
})
```


### 3. Fetch
* ES6부터 들어온 JS 내장 라이브러리 
* Promise 기반 
* 장점
    * JS 내장 라이브러리이므로 별도의 import 필요 X
    * Promise 기반
* 단점 
    * 최신 문법
    * Timeout 기능이 없다 
    * 상대적으로 나온지 얼마 안되어서 Axios 비해 기능 조금 부족
* 기본 형식 
```js
fetch('https://localhost:3000/user/post', {
    method: 'post',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JOSN.strringify({
        id: 'asd123',
        description: 'hello world',
    }),
}).then((response) => console.log(response));
```