const User = require('../model/User');
// model의 정보 불러오기

exports.index = (req,res) => {
    res.render('index');
}
// 함수를 정의할 때부터 얘는 내보낼 애라고 지정해주는 것 
exports.register = (req, res) => {
    res.render('register');
}

exports.post_register = async (req, res) => {
    var data = await User.post_user(req.body, req.file);
    console.log(req.file);
    res.send('회원가입이 완료되었습니다!')
}

/*
model과 controller 정보 주고받는 방법 !!회원가입완료문
exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(User.post_user(req.body));
}
*/
exports.login = (req, res) => {
    res.render('login'); 
}
exports.post_login = async (req, res) => {
    var data = await User.get_user();
    
    var info = data.split('\n');
    
    for (i=0; i < info.length; i ++) {
        var data = info[i];
        var user = data.split('//');
        console.log(data);

        if (user[0] == req.body.id && user[1] == req.body.pw){
            console.log(user);
            res.render('profile', {id: user[0], pw: user[1], name:user[2], age:user[3], filename:user[4]});
            break;
        };
        if (i == info.length -1) {
            res.send('로그인 실패');
            break;
        };
    }
}
/*
function get_user() {
    res.send('Get User');
}
module.exports = {
get_user
} 한 것과 동일*/