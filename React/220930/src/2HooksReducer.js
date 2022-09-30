import {useReducer} from 'react';

// useReducer에서 사용함으로서 함수형 바깥에서 state를 사용할 수 있게 됨!!
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