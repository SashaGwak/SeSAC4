const express = require('express');
const userRouter = express.Router();
const user = require('../controller/VisitorController');

userRouter.get('/visitor', user.visitor); 

module.exports = userRouter; 