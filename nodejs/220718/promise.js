//예시 1
const func1 = new Promise( ( resolve, rejects) => {
    // resolve 작업이 성공적일 때 
    // rejects 작업이 실패할 때
    var flag = true;
    if (flag) resolve(" 성공 ");
    else reject('실패');
})

// .then에 성공했을 때 then valuse가 들어옴 여기서는 "성공"이 들어옴
// .catch에는 실패했을 때 value가 들어옴 여기서는 "실패"가 들어옴
func1.then( value => {
    console.log( value);
}).catch(err => {
    console.log(err);
});

// 예시 2
const func2 = new Promise( function ( resolve, rejects) {
    var flag = true;
    if (flag) resolve(" 성공 ");
    else reject('실패');
})

// chaining이 가능 then 안에 then.. 
func2.then( value => {
    return value + "1";
}).then(result => {
    console.log(result); // 여기서 받는 것은 위의 then의 값
}).catch(err => {
    console.log(err);
});