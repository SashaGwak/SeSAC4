const Visitor = require('../model/Visitor');
// model의 정보 불러오기


exports.visitor = async (req,res) => {
    Visitor.get_visitors();
    res.render('visitor');
}