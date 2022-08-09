const User = require('../model/User');
// model의 정보 불러오기

exports.register = (req, res) => {
    res.render('register'); 
}
exports.post_register = (req, res) => {
    console.log(req.body);

    User.insert(req.body.id, req.body.name, req.body.pw, req.body.email, function (result){
        // function(result) 가 model/User.js의 User.insert(cb)의 콜백함수가 된 것! 
        // 따라서 콜백함수를 통해 rows=result 정보를 전달받을 수 있다
        console.log(result);
        res.send('회원가입 성공!'); 
    })
}

exports.login = (req, res) => {
    res.render('login')
}

exports.post_login = (req, res) => {
    User.login(req.body.id, req.body.pw, function(result) {
        console.log('요긴 컨트롤 : ', result);
        // 로그인 위하여 id, pw 확인 작업
        if (req.body.id == result.id && req.body.pw == result.password) {
            res.render('profile', {id: req.body.id, pw: req.body.pw}); 
            return; 
        }
        res.render('fail'); 
    }); 
    }

exports.patch_info = (req, res) => {
    User.update(req.body, function (result){
        console.log(req.body);
        res.send('수정 성공'); 
    });
}

exports.delete_info = (req, res) => {
    User.delete(req.body, function(result) {
        console.log(req.body); 
        res.send('OK bye!');
    })
}