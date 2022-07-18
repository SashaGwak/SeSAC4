const os = require('os');

// os 모듈 
console.log( os.hostname() );

// process 모듈
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.uptime());
console.log(process.exexPath);
console.log(process.cpuUsage());
console.log(process.env);

const path = require('path');
// 어떤 폴더나 파일 경로를 조작할 지를 정해줘야함 
const string = __filename;
console.log( path.extname(string) );
// 확장자만 출력해줌
