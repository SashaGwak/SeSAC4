const fs = require('fs').promises;

async function exec(){
    // async await 써서 파일 만들어지는 것 읽는 것 등 기다려줘야 온전한 파일을 다룰 수 있음 !! 
    // 비동기 방식을 안쓰면 파일 내용이 다 안불러와졌는데 copy하거나 이런경우가 생겨요 ! 
    await fs.mkdir('./sesac');
    await fs.writeFile('./sesac/sesac.txt', '반갑습니다');
    await fs.copyFile('./sesac/sesac.txt', './sesac/sesac2.txt');
    await fs.rename('./sesac/sesac2.txt', './sesac/new.txt');
}

exec();