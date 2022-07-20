// 객체 구조 분해 할당
let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: function() {
        console.log('a');
    }
};

const {key1:key00, key2, key3, key4='a'} = obj;
// key1를 key00으로 바꾸겠다! (변수명 변경)
key3();
console.log(key00);
console.log(key4);

let obj2 = {a:1, b:2, c:3, d:4};
const {a, b, ...rest} = obj2;
// ... 쓰면 나머지 애들 다 가져옴!!

console.log(rest);