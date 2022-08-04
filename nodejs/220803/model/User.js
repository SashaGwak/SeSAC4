const fs = require('fs').promises;


exports.post_user = function(data, file){
    console.log(data);
    console.log(file);
    const {id, pw, name, age} = data; 
    const {filename} = file; 
    fs.appendFile('./info.txt', id + '//' + pw + '//' + name + '//' + age + '//'+ filename + '\n', function(err) {
        if (err) throw err;
        console.log('회원가입 정보 추가 오류')
    })
}

/*
model과 controller 정보 주고받는 방법 !! 
exports.post_user = function(data){
    console.log(data);
    let name = data.name; 
    let msg = data.name + '님 회원가입이 완료되었습니다!🥰';
    console.log(name);
    console.log(msg);
    return msg;
}
*/

exports.get_user = async function() {
    var buffer = await fs.readFile('./info.txt');
    return buffer.toString();
}
/*
파일 읽어오는 법 
exports.post_user = function(data){
    const {id, pw, name, age} = data; 
    fs.writerFile('./info.txt', '${id}//${pw}//${name}//${age}')
}
*/