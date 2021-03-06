// 콜백 함수 : 함수가 끝난 뒤 실행되는 함수 
// 장점
// 1. 가독성이 높고 코드 재사용할 수 있음
// 2. 비동기 방식으로 작성된 함수를 동기 처리 할 수 있음
// 단점 
// 콜백지옥 발생할 수 있음
// 함수의 매개변수로 넘겨지는 콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐(가독성 떨어지며, 코드 수정 난이도가 높아짐)
function func1(callback){
    callback();
}

func1(function (){
    console.log('안녕');
});