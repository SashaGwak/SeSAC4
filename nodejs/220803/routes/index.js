const express = require('express');
// 얘가 라우터라는 걸 알려주기 위하여 express 이용
const router = express.Router();
// router가 Router라고 지정해줌
const user = require('../controller/UserController');
// 각각의 객체 가져와도 되지만 user.객체명으로 써서 여러 객체 사용할 수 있게 하기 위해

router.get('/a', function(req, res) {
    res.send('Index');
})

router.get('/register', user.get_user);
// UserController파일에서 export한 get_user 객체 가져온 것

module.exports = router; 
// index.js파일에서 router를 모르기때문에 내보내서 알려줘야함 