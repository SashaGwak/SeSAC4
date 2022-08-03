const express = require('express');
// 얘가 라우터라는 걸 알려주기 위하여 express 이용
const userRouter = express.Router();
// userRouter가 Router라고 지정해줌
const user = require('../controller/UserController');
// 각각의 객체 가져와도 되지만 user.객체명으로 써서 여러 객체 사용할 수 있게 하기 위해

userRouter.get('/', user.index); 
userRouter.get('/register', user.register);
userRouter.post('/register', user.post_register);
// UserController파일에서 export한 index, register 객체 가져온 것

userRouter.get('/login', user.login);
userRouter.post('/login', user.post_login);


module.exports = userRouter; 
// index.js파일에서 router를 모르기때문에 내보내서 알려줘야함 