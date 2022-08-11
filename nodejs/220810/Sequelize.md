## Node.js Sequelize 사용하기

## 1. sequelize 패키지 설치 
```bash
npm install mysql2 sequelize sequelize-cli
```

## 2. DB 연결해주기
```js
// config/config.json
{
    "development": {
        "host": "localhost", 
        "database": "데이터베이스명", 
        "username": "user",
        "password": "비밀번호",
        "dialect": "mysql" 
    },
    "production": {
    }, 
    "test": {
    }
}
```
```js 
// model/index.js
const Sequelize = require('sequelize'); 

const config = require('../config/config.json')["development"]
// config.json에서 "development부분 가져옴"
/* 따라서 이런 형태로 불러옴
{
    "host": "localhost", 
    "database": "sesac", 
    "username": "user",
    "password": "Mini1028!",
    "dialect": "mysql" 
    }, */

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username, 
    config.password,
    config
);
// development 환경이 아니더라도 쉽게 변경할 수 있도록 config.__ 형태로 불러옴

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db = {"sequelize": sequelize, "Sequelize":Sequelize}; 

db.Visitor = require('./Visitor')(sequelize, Sequelize);

module.exports = db;
// db를 controller에서 쓸수 있도록 공개 ! 
```


## 3. sequelize 사용
## 1) 테이블명.findAll() = select * from 테이블명;
```js
// controller/VisitorController.js
const models = require('../model'); 

// get_visitor는 routes로 인해 실행되는 함수
exports.get_visitor = (req, res) => {
    models.Visitor.findAll()
    // sequelize는 프로미스 기반으로 then 가능
    .then((result) => {
        console.log('result: ', result); 
        res.render('index', {data: result});
    })
    /* console.log('result: ', result); 출력결과 
        result :  [
            visitor {
                dataValues: { id: 1, name: '홍길동', comment: '내가 왔다' },
                _previousDataValues: { id: 1, name: '홍길동', comment: '내가 왔다' },
                uniqno: 1,
                _changed: Set(0) {},
                _options: {
                    isNewRecord: false,
                _schema: null,
                _schemaDelimiter: '',
                raw: true,
                attributes: [Array]
                },
                isNewRecord: false
            }
        ] 
        -> console.log(result[0].id) 로 사용가능 -> 1 출력
        -> visito의 여러개의 값이 배열 형태로 나옴 주의!! 
    */
   }
```



## 2) 테이블명.findOnd(where:{조건}) = select * from 테이블명 where '조건' limit 1;
```js
exports.get_visitor = (req,res) => {
    // findOne은 한개로만 와서 배열에 담기지 않음!! 
    // 따라서 [0] 이런식으로 안해줘도 됩니당
    // findAll 은 하나만 값이 와도 배열에 싸여짐
    models.Visitor.findOne({
        where: {id: req.query.id}
        // 여러 조건 걸고 싶은 경우 
        // where: {id: req.query.id, name:'홍길동'}
    }).then((result) => {
        console.log(result);
        res.send({result: result}); 
    })
}
```



## 3) 테이블명.create(객체정보({속성: 값})) = insert into(속성) 테이블명 values(값)
```js
// controller/VisitorController.js
const models = require('../model'); 

exports.post_comment = (req,res) => {
    let object = {
        name: req.body.name, 
        comment: req.body.comment
    };
    // 어떤 객체를 만들지에 대한 정보가 꼭 있어야함
    // create() = insert into visitor 
    // create({name: '홍', comment:'길동"}) = insert into visitor(name, comment) values('홍', '길동');
    
    models.Visitor.create( object )
    .then((result) => {
        console.log(result);
        res.send({id: result.id}); 
        // findAll 과 같은 형태로 reuslt 출력됨
    });
}
```


## 4) 