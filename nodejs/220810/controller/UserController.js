const models = require('../model'); 

exports.get_register = (req,res) => {
    res.render('register');
}

exports.post_register = (req, res) => {
    let object = {
        id: req.body.id, 
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.pw, 
    };
    models.User.create( object )
    .then((result) => {
        console.log(result);
        res.send('회원가입 성공');
    })
}

exports.login = (req, res) => {
    res.render('login')
}

exports.post_login = (req, res) => {
    models.User.findOne({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);

        if (req.body.pw == result.password) {
            res.render('profile', {id:result.id, pw:result.password});
            return 
        } 
        res.render('fail');
    })
}

exports.patch_info = (req, res) => {
    let newObj = {
        id: req.body.id, 
        password: req.body.pw
    }
    models.User.update( newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공!')
    })
}

exports.delete_info = (req, res) => {
    models.User.destroy({where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('삭제 성공!')
    })
}