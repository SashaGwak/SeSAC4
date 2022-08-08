const mysql = require('mysql'); 

const cnn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: 'Mini1028!', 
    database: 'sesac',
})


exports.insert = (id, name, pw, email, cb) => {
    var sql = `insert into user(id, name, password, email) values('${id}', '${name}', '${pw}', '${email}')`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        console.log(rows);
        cb(rows);
    })
}

exports.login = (id, pw, cb) => {
    var sql = `select * from user where id='${id}'`
    cnn.query(sql, (err,rows) => {
        if (err) throw err; 

        console.log('DB : rows', rows);
        cb(rows[0]); 
    }); 
}