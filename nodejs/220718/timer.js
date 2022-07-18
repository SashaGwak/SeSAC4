const func1 = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const func2 = setInterval(() => {
    console.log('1초 마다 반복');
}, 1000);

const func3 = setTimeout(() => {
    console.log('func3 실행');
}, 3000);

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
    // 3초가 되기 전 func2, 3 멈춰줌!!
}, 2500);

const func4 = setImmediate(() => {
    console.log('func4 즉시실행');
});
const func5 = setImmediate(() => {
    console.log('func5 즉시실행');
});
clearImmediate(func5);
// 멈추라고 이야기 했기 때문에 func5 실행되지 않음 

console.log(__filename)
// 현재 파일 경로
console.log(__dirname)
// 현재 폴더(디렉토리) 경로