const express = require('express');
const router = express.Router();
const user = require('../controller/Controller');

router.get('/', user.register);
router.post('/register', user.post_register);

router.get('/login', user.login);
router.post('/login', user.post_login);

module.exports = router; 