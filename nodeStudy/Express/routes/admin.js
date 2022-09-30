const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;

/*
// until로 경로 가져오는 경우
// const rootDir = require('../util/path');
router.get('/add-product', (req, res, next) => {
    // until로 경로 가져오는 경우
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // ___dirname로 경로 가져오는 경우
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
*/
