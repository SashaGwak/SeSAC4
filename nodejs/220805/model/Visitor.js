const mysql = require('mysql');
// createConnection : DB 연결해주는 함수 
const cnn = mysql.createConnection({
    host: 'localhost', 
    user: 'user',
    password: 'Mini1028!',
    database: 'sesac',
    // 하나의 DB만 연결가능하므로 DB명 명시해줘야함 
})

exports.get_visitors = (cb) => {
    // DB.query -> SQL문으로 DB 다뤄줌 
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        // 정상적으로 실행되면 rows에 데이터 모두 담긴다
        console.log(rows);
        cb(rows);
    });
}

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

exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id 인 데이터를 1개만 검색한다
    // SQL문 ``에 넣음에 주의!! 
    cnn.query(`SELECT * from visitor where id = ${id} limit 1` , (err, rows) => {
        if (err) throw err; 

        cb(rows);
    })
}

exports.update = (data, cb) => {
    let sql = `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id}` ; 
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        cb(rows); 
    })
}

exports.delete = (id, cb) => {
    cnn.query(`delete from visitor where id=${id}`, (err, rows) => {
        if (err) throw err;

        cb(rows); 
    })
}