// Promise 
// callback Hell로 인한 복잡도 증가와 예외처리의 어려움을 해결하기 위하여 사용 
function promise1(flag){
    return new Promise( function(resolve, reject) {
        if(flag) {
            resolve('then으로 연결');
        } else {
            reject('catch로 연결');
        }
    });
}

promise1(true)
    .then( function(result){
        console.log('then : ',result);
    })
    .catch( function (err) {
        console.log('catch : ', err);
    });

promise1(false)
    .then( function(result){
        console.log('then : ',result);
    })
    .catch( function (err) {
        console.log('catch : ', err);
    });

// promise의 상태 
// 1.pending : promise를 수행중인 상태 
// 2.Fulfilled : promise가 resolve 된 상태 
// 3.Rejected : promise가 지켜지지 못한 상태, reject 된 상태
// 4.Settled : fulfilled 혹은 rejected로 결론이 난 상태