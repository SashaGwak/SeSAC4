// async
// 함수 앞에 붙여 promise를 반환한다 
// 프로미스가 아닌 값을 반환해도 프로미스로 감싸서 반환한다 
// await
// 프로미스 앞에 붙여서 프로미스가 다 처리될 때까지 기다리는 역할을 하며 그 결과는 그 후 에 반환한다

// 예시 1 (똑같은 문장 promise, async 버전)
// function func() {
//     return new Promise(function(resolev, reject) {
//         resolev(1);
//     })
// }
async function func(){
    return 1;
}

func().then(function(result){console.log(result);});

// 예시 2
function login(id, pw) {
    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    });
}
function getVideo(id) {
    return new Promise( function (resolve, reject) {
        setTimeout(function() {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}
function getDetail(video) {
    return new Promise( function (resolve, reject){
        setTimeout(function() {
            resolve( '비디오 제목은 : '+ video);
        });
    });
}
function exec() {
    login('kim','1234')
        .then( function(user) {
            console.log('user님 환영');
            return getVideo(user);
        })
        .then( function(videos) {
            console.log(videos);
            return getDetail(videos[0]);
        })
        .then( function(title) {
            console.log(title);
        })
}

// async는 항상 function 만들어질때 앞에 붙음
// 함수 안에서 비동기 함수를 실행할 때 await를 써줌
// 비동기 함수를 동기식으로 작성할 수 있다
async function exec(){
    let user = await login('kim', '1234');
    console.log('user님 환영');
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
}

exec();
