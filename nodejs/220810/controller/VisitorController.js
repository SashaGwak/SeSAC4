// const Visitor = require("../model/Visitor");
const models = require('../model'); 
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    // sequelize 문법. select * from visitor;
    models.Visitor.findAll()
    .then((result) => {
        console.log('result : ', result);
        /* result 결과
        result :  [
            visitor {
                dataValues: { id: 1, name: '홍길동', comment: '내가 왔다' },
                _previousDataValues: { id: 1, name: '홍길동', comment: '내가 왔다' },
                uniqno: 1,
                _changed: Set(0) {},
                _options: {
                isNewRecord: false,
                _schema: null,
                _schemaDelimiter: '',
                raw: true,
                attributes: [Array]
                },
                isNewRecord: false
            }
        ] 
        -> console.log(result.id) 로 사용가능 -> 1 출력
        */
        console.log('index');
        res.render('index', {data: result});
    }); // sequelize는 프로미스 기반이라서 then가능
    
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    let object = {
        name: req.body.name, 
        comment: req.body.comment
    };
    
    // 어떤 객체를 만들지에 대한 정보가 꼭 있어야함
    // create() = insert into visitor 
    // create({name: '홍', comment:'길동"}) = insert into visitor(name, comment) values('홍', '길동');
    models.Visitor.create( object )
    .then((result) => {
        console.log(result);
        res.send({id: result.id}); 
    });
    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {
    // select * from visitor where id = req.query.id limit 1 
    // findOne은 한개로만 와서 배열에 담기지 않음!! 
    // 따라서 [0] 이런식으로 안해줘도 됩니당
    models.Visitor.findOne({
        where: {id: req.query.id}
        // 여러 조건 걸고 싶은 경우 
        // where: {id: req.query.id, name:'홍길동'}
    }).then((result) => {
        console.log(result);
        // 한개의 데이터만 온다!! findOne 
        res.send({result: result}); 
    })
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    }
    // update visitor set name=req.body.naem, comment:req.body.comment
    models.Visitor.update( newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result); 
        // result에 몇개가 update 된건지에 대한 정보를 받아옴 
        // comment 하나 바꾸면 -> 1 출력
        res.send('수정 성공');
    })
    /* update (1, 2)
    1.수정할 객체
    2.조건
     */


    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        // result => delete 된 데이터의 개수 
        res.send('삭제 성공');
    })
}