const mysql = require('mysql'); 

// createConnection : DB 연결해주는 함수 
const cnn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: 'Mini1028!', 
    database: 'sesac',
    // 하나의 DB만 연결가능하므로 DB명 명시해줘야함 
})

// register와 연결되어 회원가입 -> insert가능하게 해줌
exports.insert = (id, name, pw, email, cb) => {
    // DB.query -> SQL문으로 DB 다뤄줌 
    var sql = `insert into user(id, name, password, email) values('${id}', '${name}', '${pw}', '${email}')`
    // 백틱사용하고 있음!! 
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows);
    })
}

// 로그인과 연결되어 id(primary key) 정보를 통해 user 정보확인해줌
exports.login = (id, pw, cb) => {
    var sql = `select * from user where id='${id}'`
    cnn.query(sql, (err,rows) => {
        if (err) throw err; 

        console.log('DB : rows', rows);
        // 정상적으로 실행되면 rows에 데이터 모두 담긴다
        // 하지만 [{data}] 형태임에 주의하기!!! 
        // 여기서는 한 user의 데이터만 써줄거니까 rows[0]로 기재 
        // -> {data} 형태로 표현됨
        cb(rows[0]); 
    }); 
}

// profile 과 연결되어 user정보 update 구현
exports.update = (data, cb) => {
    let sql = `update user set password='${data.pw}' where id='${data.id}';`
    cnn.query(sql, (err, rows) => {
        if (err) throw err; 

        cb(rows); 
    })
}

// profile과 연결되어 회원 탈퇴 가능하도록 구현
exports.delete = (data, cb) => {
    cnn.query(`delete from user where id='${data.id}';`, (err, rows) => {
        if (err) throw err; 

        cb(rows); 
    })
}