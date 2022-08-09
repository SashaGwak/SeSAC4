## Node.js mysql 연결하기

### 1. mysql 패키지를 설치
```bash
npm i mysql 
# mysql 패키지 설치
```

### 2. 사용자 권한 확인 및 관리
* 외부에서 최상위 root로의 비밀번호 접근을 허용하지 않는다 -> 새로운 사용자를 만들고 그 사용자로 접근 해야함 
```sql
select host, user, plugin, authentication_string from mysql.user; 

create user 'user'@'%' identified by '1234';
Grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;
alter user 'user'@'%' identified with mysql_native_password by '1234'; 
```

### 3. mysql 통하여 DB 연결 및 사용
```js 
const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user', // 권한 받을 유저 정보 
    password: '비밀번호',
    database: 'sesac'
    // 하나의 데이터 베이스 연결
})
```