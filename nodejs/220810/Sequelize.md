## Node.js Sequelize 사용하기

## 1. sequelize 패키지 설치 
```bash
npm install mysql2 sequelize sequelize-cli
```

## 2. 모델 정의해주기
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
// model/Visitor.js 파일 내 Visitor에서 model 가져옴!!!! 

module.exports = db;
// db를 controller에서 쓸수 있도록 공개 ! 
```
```js
// model/Visitor.js
const Visitor = (Sequelize, DataTypes) => {
    //Sequelize는 model/index.js 에서의 sequlize
    //datatype는 model/index.js 에서의 Sequlize
    const model = Sequelize.define(
        'visitor', 
        {
            // creat ~~ (id int not null auto_increment primary key)
            id: {
                type: DataTypes.INTEGER, 
                allownull: false,
                primaryKey: true, 
                autoIncrement: true,
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10), 
                allownull: false,
            }, 
            comment: { // comment mediumtext
                type: DataTypes.TEXT('medium'),
            }
        }, 
        {
            tableName: 'visitor', 
            freezeTableName: true, 
            // freezeTableName을 true로 설정하면 이름을 복수로 설정하지 않는다 
            timestamps: false,
            // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다
        }
    ); 
    return model;
    /* define함수 인자 3개 
    1. 모델(테이블)이름 설정 -> Visitor 
    2. 컬럼 정의 -> (id, name, comment)
    3. 모델의 옵션 정의 
     */
}

module.exports = Visitor;
```


## 3. 모델 동기화 
* app.js 파일에 동기화 처리 진행 
```js
// app.js
const Sequelize = require('./util/database');

/* DB */
Sequelize
    .sync()
    // sync -> 모델을 데이터베이스로 동기화해 해당하는 테이블을 생성하고 관계가 있다면 관계도 생성
    .then(result => {
        // console.log(result);  // Sequelize 객체 출력
        app.listen(port, () => {
            console.log('Server start : ', port);
        });
    })
    .catch(err => {
        console.log(err);
    });

```


## 4. sequelize 사용
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



## 3) 테이블명.create({속성: 값}) = insert into(속성) 테이블명 values(값)
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


## 4) 테이블명.update({속성:값}, where 조건) = update 테이블명 set 속성=값 where 조건 
```js
exports.patch_comment = (req,res) => {
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    }
    models.Visitor.update( newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result); 
        // result에 몇개가 update 된건지에 대한 정보를 받아옴 
        // comment 하나 바꾸면 -> 1 출력
        res.send('수정 성공');
    })
}
```


## 5) 테이블명.destory(where 조건) = delete from 테이블명 where  조건
```js
exports.delete_comment = (req,res) => {
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        // result => delete 된 데이터의 개수 
        res.send('삭제 성공');
    })
}
```
