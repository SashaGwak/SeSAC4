const fs = require('fs').promises;


// 파일 생성
// fs.writeFile('./write.txt', '안녕하세요')
//     .then(() => {
//         console.log('작성 완료');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// 파일 복사
// copyFile(복사할 파일, 만들 파일)
// fs.copyFile('./write.txt', './new.txt')
//     .then(() => {
//         console.log('복사 완료');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
// 생성 하는 중간에 복사되는 것을 방지하기 위하여 async await사용

exec();