exports.get_user = (req,res) => {
    res.send('Get User');
}
// 함수를 정의할 때부터 얘는 내보낼 애라고 지정해주는 것
/*
function get_user() {
    res.send('Get User');
}
module.exports = {
get_user
} 한 것과 동일*/