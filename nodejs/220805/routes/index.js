const express = require('express');
const router = express.Router();
const visitor = require('../controller/VisitorController');

router.get('/', visitor.visitor); 
router.post('/write', visitor.post_comment); 

// 방명록 수정 경로 
router.get('/get', visitor.get_visitor);
router.patch('/edit', visitor.patch_comment);
router.delete('/delete', visitor.delete_comment);

module.exports = router; 