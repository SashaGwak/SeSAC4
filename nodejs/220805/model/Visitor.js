const mysql = require('mysql');
// createConnection : DB 연결해주는 함수 
const cnn = mysql.createConnection({
    host: 'localhost', 
    user: 'user',
    password: 'Mini1028!',
    database: 'sesac',
    // 하나의 DB만 연결가능하므로 DB명 명시해줘야함 
})

exports.get_visitors = () => {
    // DB.query -> SQL문으로 DB 다뤄줌 
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        // 정상적으로 실행되면 rows
        console.log(rows);
    });
}