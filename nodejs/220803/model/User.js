const fs = require('fs').promises;

exports.post_user = function(data){
    const {id, pw, name, age} = data; 
    fs.writerFile('./info.txt', '${id}//${pw}//${name}//${age}');
    // console.log(data);
    // console.log(data.name);
    // let name = data.name; 
    // let msg = data.name + '님 회원가입이 완료되었습니다!🥰';
    // console.log(msg);
    // return name, msg 
}
exports.get_user = async function() {
    var buffer = await fs.readFile('./info.txt');
    return buffer.toString();
}
/*
exports.post_user = function(data){
    const {id, pw, name, age} = data; 
    fs.writerFile('./info.txt', '${id}//${pw}//${name}//${age}')
}
*/