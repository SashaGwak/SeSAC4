## map()
* map() 함수 문법
    ```js 
    arr.map(callbackFunction, [thisArg])
    ```
    * callbackFunction : 새로운 배열의 요소를 생성하는 함수로, currentValue, index, array 3개의 인수를 가질 수 있다
    * [this.Arg] 는 생략 가능한 것으로 callbackFunction 에서 사용 가능한 this 객체

### map 
```js 
function App() {
    let list = ['a', 'b', 'c']; 
    // map((값, 인덱스, 원래배열))
    let items = list.map((value, id, arr) => {
        console.log("value : ", txt)
        console.log("id : ", txt)
        console.log("arr : ", txt)
        return txt + id;
    }); 
    console.log(items);
    // <변수명 변경 가능> 
    // value : list 를 순서대로 돌면서 나오는 값
    // id : 방금 나온 값(txt)의 인덱스
    // arr : 현재 반복을 돌고 있는 배열
    // items : “return txt + id;” 로 만들어진 배열

    return (
        <div>
        <ul>
            {list.map((name, i) => {
            return <li key={i}>{i}. {name}</li>; 
            // 인덱스. 값 형태로 출력됨
            // map() 함수를 이용해 컴포넌트를 생성할 때 “key”사용을 권장
            // Key를 index 값으로 설정할 시, 리스트의 순서가 변경되면 모든 key가 변경되므로 key는 index 가 아닌 고유한 값으로 설정해야 한다
            })}
        </ul>
        <button onClick={addElement}>추가</button>

        <ul>
            {list.filter((name) => {
            return name.includes("a");
            })}
        </ul>
        </div>
    );
}
```

## filter()
```js
let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];

// 4글자 이상인 문자열을 찾을 때 
// 예시 1(for 문으로 쓴다면)
let newList = [];
for (let i = 0; i <lists.length; i++) {
    if (list[i].length > 4) newList.push(lists[i]);
}
// 예시 1(filter 사용) 
let result = lists.filter((value) => {
    return value.length > 4;
    // 리턴 내 조건을 충족하는 요소만 result 리스트에 담김 

    // a가 들어간 문자열 확인 하는 조건문
    // return word.includes('a');
})
```