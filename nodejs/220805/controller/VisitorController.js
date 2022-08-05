const User = require('../model/Visitor');
// model의 정보 불러오기

exports.visitor = (req,res) => {
    res.render('visitor');
}