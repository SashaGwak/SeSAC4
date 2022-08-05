## MySQL을 사용하여 DB 연결 및 활용하기(with MVC pattern)
### 1. mysql을 통하여 DB 연결해주기
```js
const mysql = require('mysql');

const cnn = mysql.crateConnection({
    host: 'localhost',
    user: 'user', // 사용자 이름 
    password: user비밀번호,
    datavase: 'DB명',
    // 하나의 DB만 연결가능하므로 DB명 명시해줘야함 
})
```

### 2. DB 활용하기(SELECT)
```js
// routes/index.js
const visitor = require('../controller/VisitorController');
router.get('/', visitor.visitor); 
// visitor 실행

// controller.js
exports.visitor = async (req, res) => {
    model require 변수명.get_visitors(function(result) {
        console.log(result);
        /* 출력 결과 
        [
        RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다' },
        RowDataPacket { id: 2, name: '11', comment: '22' }
        ]
        */        
        res.render('보여줄 view 파일', {data: result});
        // model 에서 받아온 result(sql data)를 render해줌 
        // ejs에서 data라는 key값을 통해 for 문으로 사용가능
    })
}
```

```js
// model/Visitor.js
exports.get_visitors = (cb) => {
    // DB명.query -> SQL문으로 DB 다뤄줌 
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) thow err;

        console.log(rows);
        // 데이터 보내줘야 해서 콜백함수 써줌! 
        cb(rows);
    })
}
```

### 2. DB 활용하기(INSERT)
```js
// controller.js
exports.post_comment = (req,res) => {
    console.log(req.body);

    Visitor.insert( req.body.name, req.body.comment, function(result){
        res.send({id: result});
        // 응답을 하면 response의 데이터로 고고 
    });
}
```
```js
// model/Visitor.js
exports.insert = (name, comment, cb) => {
    var sql = "INSERT INTO visitor(name, comment) values('"+ name + "', '" + comment + "')"
    // '""'으로 두번 감싸줌 주의!!! 
    cnn.query( sql, (err,rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows.insertId);
        /*
        **console.log(rows) 출력값 

        OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 2,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
        } */
        // 여기서 필요한 정보는 insertId -> primary key 값이 나옴
        // DB에서 자동으로 생성되서 가져오는 정보기 때문에 inserId로 확인해줘야함
    })
}
```