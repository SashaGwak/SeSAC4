let list = ['apple', 'banana'];

// let item1 = list[0];
// let item2 = list[1];

[item1, item2 = 'peach', item3 = 'melon'] = list;
// 배열 구조 분해
// item1에는 apple이 들어가고 .. 순서대로
// undefined 값에는 기본 값 넣을 수 있음 !! -> 일단 입력 값이 우선이고 값 없으면 기본값 넣어줌

console.log("item1 :", item1);
console.log("item2 :", item2);
console.log("item3 :", item3);

let x=1, y=3; 
[y, x] = [x, y]
// 이렇게 값을 바꿔주는 것 가능

