const express = require('express');
const router = express.Router();
const Chat = require('../controller/ChatController');

router.get('/', Chat.chat_index); 

module.exports = router; 