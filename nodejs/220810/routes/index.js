const express = require("express");
const router = express.Router();
const visitor = require("../controller/VisitorController");

const loginRouter = express.Router();
const User = require('../controller/UserController'); 

// 방명록 시스템
router.get("/", visitor.get_visitors);
router.post("/write", visitor.post_comment);
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment);
router.delete("/delete", visitor.delete_comment);

// 로그인 시스템
loginRouter.get('/', User.get_register);
loginRouter.post('/register', User.post_register);
loginRouter.get('/login', User.login);
loginRouter.post('/login', User.post_login);
loginRouter.patch('/edit', User.patch_info);
loginRouter.delete('/delete', User.delete_info);

module.exports = {
    router, 
    loginRouter
}