const obj = {
    out: {
        in :{
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj['out']);
console.log(obj['out']['in']);

console.time("시간");
// time 부터 timeEnd까지의 시간 측정해서 보여줌

console.error("에러!");
// 서버에서 에러를 출력할 때 사용 

console.trace("Error");
// trace 함수가 몇번째 라인에서 에러 발생했는지 추적해줌
// 오류 발생시 ()내 들어간 것 출력해줌

console.table([{name:'abc', birth:1990}, {name:'def', birth:1980}]);
// console 에서 테이블 그릴 수 있게 해줌

console.dir(obj, {colors:true, depth:2 } );
console.dir(obj, {colors:false, depth:1 } );
// console.dir(변수or배열or딕셔너리, 옵션)
// 변수, 배열, 딕셔너리 등을 보여주는데 옵션 지정해서 보여줄 수 있음

// console.log : 요소를 HTML과 같은 트리구조로 출력, DOM 요소에 대해 특별한 처리를 제공
// console.dir : 요소를 JSON과 같은 트리구조로 출력, DOM JS **객체의 전체 표현**을 보려고 할 때 유용 

console.timeEnd("시간");