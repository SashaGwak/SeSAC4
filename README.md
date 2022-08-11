# SeSAC4
SeSAC 4기 웹풀스택과정 공부 내용 정리 


## Node.js
* Non-blocking I/O
    * [callback](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/callback.js)
    * [promise](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/promise.js)
    * [async_await](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/async_practice.js)
        * [코드 예시 - 동일한 로직 여러가지 방법으로 다뤄보기 1. callback](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220718/3_callback_hell.js)
        * [코드 예시 - 동일한 로직 여러가지 방법으로 다뤄보기 2. promise](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220718/promise_hell.js)
        * [코드 예시 - 동일한 로직 여러가지 방법으로 다뤄보기 3. async_await ](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/async_await.js)
* module
    * [fs](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/fs.js)
        * [코드 예시 - fs 비동기 실행]()
    * [http, server 객체](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/http_server.js)
        * [http reply](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220720/http_reply.md)
* npm 
    * [npm, express, 미들웨어, ejs 내용 정리](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220722/npm.md)
        * [코드 예시 - 1](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220722/index.js)
        * [코드 예시 - 2](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220722/views/test.ejs)
* Form 
    * [form, body-parser 내용 정리](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220725/Form.md)
        * [코드 예시 - form views/index.ejs](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220725/views/index.ejs)
        * [코드 예시 - form index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220725/index.js)
        * [코드 예시 - input 태그](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220725/views/input.ejs)
* 비동기 HTTP 통신
    * [비동기 HTTP 통신(ajax, axios, fetch) 내용 정리](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220727/http.md)
        * [코드 예시 - login system(ajax, axios, fetch 방식으로 모두 구현해보기) index.ejs](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/login/views/index.ejs)
        * [코드 예시 - login system(ajax, axios, fetch 방식으로 모두 구현해보기) index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/login/index.js)
* 미들웨어 
    * [multer](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220729/multer.md)
        * [코드 예시 - 파일 올리고 이미지 파일 렌더링 하기 index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220729_practice/index.js)
        * [코드 예시 - 파일 올리고 이미지 파일 렌더링하기 index.ejs](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220729_practice/views/index.ejs)
        * [코드 예시 - 파일 올리고 이미지 파일 렌더링하기 upload.ejs](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220729_practice/views/upload.ejs)
* MVC 구조 
    * [MVC 구조](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220803/mvc.md)
        * MVC 구조로 만들어보기(DB 제외)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220803/index.js)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 routes/index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220803/routes/index.js)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 model/User.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220803/model/User.js)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 controller/UserController.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220803/controller/UserController.js)
        * MVC 구조로 만들어보기(DB 포함)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 routes/index.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220808/routes/index.js)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 model/User.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220808/model/User.js)
            * [코드 예시 - 회원가입->로그인->프로파일 구현 controller/Controller.js](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220808/controller/Controller.js)

## Database
* [Database](https://github.com/SashaGwak/SeSAC4/blob/main/database_study/database.md)
* MySQL
    * [MySQL 설치](https://github.com/SashaGwak/SeSAC4/blob/main/database_study/mysql_install.md)
    * [DB 연결하기](https://github.com/SashaGwak/SeSAC4/blob/main/nodejs/220808/database2.md)
    * [SQL-DDL,DML](https://github.com/SashaGwak/SeSAC4/blob/main/database_study/sql.md)
* Sequelize
    * [Sequlize란? 설치방법?](https://github.com/SashaGwak/SeSAC4/tree/main/nodejs/220810/Sequelize.md)