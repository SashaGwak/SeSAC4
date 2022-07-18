function call(name) {
    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}
function back(txt) {
    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            console.log("back");
            resolve("back");
        }, 1000);
    });
}
function hell(message) {
    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            resolve("callback hell");
        }, 1000);
    });
}
call('kim')
    .then( function(name) {
        console.log(name + '반가워');
        var j = back(name);
        return j
        // return 이 되면 바로 체이닝 된 다음 함수가 진행되는 것
        // 따라서 꼭 return back()이 아니어도 되고, 값만 지정해준다면 return j 이런식으로도 넘어가는 것 가능
    })
    .then( function(txt) {
        console.log(txt + '을 실행했구나');
        return hell(txt);
        // 이렇게 쓰는 것이 더 간단
    })
    .then( function(message) {
        console.log('여기는' + message);
    })
    
