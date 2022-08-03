const express = require('express');
const router = express.Router();
// router가 Router라고 지정해줌
const user = require('../controller/UserController2');

router.get('/', function(req, res) {
    res.render('Index');
})

router.get('/receive', user.get_user);

router.post('/post', user.post_user);
// post는 데이터를 보내야지 접속가능

module.exports = router; 