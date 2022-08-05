const express = require('express');
const userRouter = express.Router();
const user = require('../controller/VisitorController');

userRouter.get('/', user.visitor); 
userRouter.post('/write', user.post_comment); 


module.exports = userRouter; 