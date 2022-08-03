const User = require('../model/User');
// model의 정보 불러오기

exports.index = (req,res) => {
    res.render('index');
}
// 함수를 정의할 때부터 얘는 내보낼 애라고 지정해주는 것 
exports.register = (req, res) => {
    res.render('register');
}
exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(User.post_user(req.body));
}
exports.login = (req, res) => {
    res.render('login'); 
}
exports.post_login = async (req, res) => {
    var data = await User.get_user();

    var info = data.split('//');

    if (info[0] != req.body.id) {
        res.send('아이디 다름');
    } else if (info[1] != req.body.pw) {
        res.send('비밀번호가 다름');
    } else {
        res.send('로그인 성공');
    }
    console.log(data);
}
/*
function get_user() {
    res.send('Get User');
}
module.exports = {
get_user
} 한 것과 동일*/