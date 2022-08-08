const User = require('../model/User');


exports.register = (req, res) => {
    res.render('register'); 
}
exports.post_register = (req, res) => {
    console.log(req.body);

    User.insert(req.body.id, req.body.name, req.body.pw, req.body.email, function (result){
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
        if (req.body.id == result.id && req.body.pw == result.password) {
            res.render('profile', {id: req.body.id, pw: req.body.pw}); 
            return; 
        }
        res.render('fail'); 
        // if (req.body.id == result.id && req.body.pw == result.password) {
        //     res.render('profile');
        //     return;
        // }else {
        // res.send(msg);     
        // }
    }); 
    }