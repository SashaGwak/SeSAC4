const fs = require('fs').promises;

// 로그인 정보와 파일정보 받아오기 
exports.post_user = function(data, file){
    console.log(data);
    console.log(file);
    const {id, pw, name, age} = data;
    // req.body 부분 나눠주기  
    const {filename} = file; 
    // req.file에서 filename 추출하기 
    fs.appendFile('./info.txt', id + '//' + pw + '//' + name + '//' + age + '//'+ filename + '\n', function(err) {
        // appendFile -> 이어서 써주기 
        if (err) throw err;
        console.log('회원가입 정보 추가 오류');
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
    // 읽는 거 기다려주도록 async await 써주기 
    return buffer.toString();
    // 읽을 수 있도록 toString 으로 함수 넣어주기 
}
/*
파일 읽어오는 법 
exports.post_user = function(data){
    const {id, pw, name, age} = data; 
    fs.writerFile('./info.txt', '${id}//${pw}//${name}//${age}')
}
*/