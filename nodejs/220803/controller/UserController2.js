exports.get_user = (req,res) => {
    console.log(req);
    console.log(req.query);
    res.send("get 성공");
};

exports.post_user = (req, res) => {
    console.log(req.body);
    console.log(req);
    res.send("post 성공")
};