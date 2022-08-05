const Visitor = require('../model/Visitor');
// model의 정보 불러오기


exports.visitor = async (req,res) => {
    Visitor.get_visitors(function(result){
        // function(result) 가 model/Visitor.js의 get_visitors(cb)의 콜백함수가 된 것! 
        // 따라서 콜백함수를 통해 rows=result 정보를 전달받을 수 있다
        console.log('result : ',result);
        console.log('index');
        res.render('visitor', {data: result});
        // model 에서 받아온 result(sql data)를 render해줌 
    });
}

exports.post_comment = (req,res) => {
    console.log(req.body);

    Visitor.insert( req.body.name, req.body.comment, function(result){
        res.send({id: result});
        // 응답을 하면 response의 데이터로 고고 
    });
}