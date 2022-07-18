const os = require('os');
const path = require('path');

// os 모듈 사용 연습 
console.log( '사용가능한 메모리(RAM) : ' + os.freemem() );
console.log( '전체 메모리 용량 : ' + os.totalmem() );
console.log( '홈 디렉토리 경로 : ' + os.homedir() );

// path 모듈 사용 연습
const string = __filename;
console.log( '경로 구분자 : ' + path.sep );
console.log( '현재 파일의 확장자 : ' + path.extname(string) );
console.log( '현재 파일의 경로를 분리 : '  )
console.log( path.parse(string) );