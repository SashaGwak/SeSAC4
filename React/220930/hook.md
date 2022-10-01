## Hook 
* react의 새로운 기능 
* 클래스 컴포넌트에만 가능했던 state(상태관리)와 lifecycle이 가능하도록 도와주는 기능 
* 사용 규칙
    * 최상위 단계에서만 호출 가능 
        * 최상위 컴포넌트 X
        * 반복문, 조건문, 중첩된 함수 내부에서 호출하면 안된다는 것 
    * Hook은 오로지 React **함수형 컴포넌트** 안에서만 호출 가능!! 
* 종류 
    * useState()
    * useEffect()
    * useReducer()
    * useMemo()
    * useCallback()
    * useRef()

## useState()
* 함수형 컴포넌트에서 상태 관리를 위해 사용하는 것(동적 상태관리)
* 가장 기본적인 Hook으로 함수형 컴포넌트에서 가변적인 상태를 지니게해준다
* 클래스형 컴포넌트에서의 State

## useEffect()
* sideEffect를 수행(mount / unmount / update)
* 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate가 합쳐진 형태
* 사용예시
    ```js
    useEffect(() => {
        console.log('useEffect');
        console.log('name : ', name );
    }, [name]);
    // useEffect(callback, [감시할애(배열로 보내주기!)])
    // useEffect(하나만) 쓰면 mount, update 때 모두 발생
    // update cycle 에 조건을 줄수 있는 것이 장점!! 

    /* 위와 동일
    componentDidUpdate(prevProps, prevState) {
        if (prevState.name != this.state.name ) {
            // 실행
        }
    };
    */

    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
            
        }
    });
    // cleanup(뒷정리함수)를 이용해서 업데이트 하기 직전 값을 확인할 수 있음 
    ```

## useReducer()
* Reducer란
    * 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
* 장점
    * 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음
* useReducer은 useState의 대체함수로 다양한 컴포넌트 상황에 따라 상태값을 설정할 수 있음
```js
import React, {useReducer} from 'react';

// useReducer에서 사용함으로서 함수형 바깥에서 state를 사용할 수 있게 됨!!(컴포넌트 업데이트 로직을 바깥으로 뺄수 있게됨)
function reducer(state, action){
    // state가 {value:0}이 된다(현재 상태가 계속 전달되게 됨)
    // action은 내가 전달한 액션값(여기서는 type)
    switch(action.tpye) {
        case "INCREMENT":
            // 새로운 상태를 전달해야하므로 딕셔너리 형태로 전달해야함
            return {value: state.value +1};
        case "DECREMENT": 
            return {value: state.value -1};
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value:0});
    // const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>);
    // dispatch가 실행되기 위하여 reducer가 먼저 실행되게 된다
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({tpye: "DECREMENT"})}}>-1</button>
            <button onClick={() => {dispatch({tpye: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;
```

## useMemo()
* 함수형 컴포넌트 내부에서 발생하는 연산을 최적화시켜주는 Hook
* Redering 과정에서 특정 값이 바뀌었을 때만 연산을 실행 
```js
import {useMemo} from 'react';

// 평균값을 구해주는 함수
function getAverage(list) {
    // 생략 
}

// 연산을 최적화 시켜주는 hook
const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const onChange = (e) => {
        setNum(e.target.value);
    }

    const onInsert = (e) => {
        setList([...list, parseInt(num)]); 
        console.log(list);
        setNum(0);
    }
    

    const avg = useMemo(() => getAverage(list), [list]);
    // Rendering 과정에서 특정값이 바뀌었을 때만 연산을 실행 
    // const memoizedValue = useMemo(callback. dependency);

    /* 동일한 의미  
    const [avg, setAvg] = useState(0); 
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]);
    */

    return (
        <>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </>
    )
}

export default Memo;
```


## useCallback()
* Redering 최적화에 사용되는 Hook API
* useMemo와 비슷한데, useMemo에서는 값은 최적화시켰지만 다시 redering 될 때 함수를 다시 불러오는 것을 막는다
```js
import {useCallback} from 'react';

// 평균값을 구해주는 함수
function getAverage(list) {
    // 생략 
}

const Callback = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    // useCallback 사용하여 정의한다면
    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, []);
    // const memoizedCallback = useCallback(함수, 배열);
    // 첫번째 인자로 넘어온 함수를 두번재 인자로 넘어온 배열내의 값이 변경될 때까지 저장해 놓고 재사용 할 수 있게 해줌

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num)); 
        setList(nextList); 
        setNum("");
    }, [num, list])
    // num, list가 바뀌었을 때 callback 함수 재사용 해줌

    return (
        <>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </>
    )
}

export default Callback;
```

## useRef()
* 함수형 컴포넌트에서 ref를 사용하기 쉽게 만들어주는 Hook
* useRef() 는 인자로 받은 값으로 초기화된 변경 가능한 ref 객체를 반환
* ref.current 로 현재 가리키는 객체에 접근
```js
import {useRef, useMemo} from 'react';

// 평균값을 구해주는 함수
function getAverage(list) {
    // 생략 
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef(null);
    // 그냥 useRef()로 써주는데 초기값넣거나 없다는 의미로 useRef(null)이라고 쓰기도 함
    // ref.current 로 현재 가리키는 객체에 접근할 수있다

    const onChange = useCallback(e => {
        setNum(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num)); 
        setList(nextList); 
        setNum("");
        input.current.focus(); // 사용시 current 필요! 
    }, [num, list])

    const avg = useMemo(() => getAverage(list), [list]);
    

    return (
        <>
            <input value={num} onChange={onChange} ref={input}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </>
    )
}

export default Memo;
```