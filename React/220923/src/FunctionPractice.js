import React, {useState} from 'react';

function FunctionPractice() {
    const [cnt, setCnt] = useState(0);

    function Increase() {
        setCnt(cnt + 1);
    }
    function Decrease() {
        setCnt(cnt - 2);
    }

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <p>숫자 : {cnt}</p>
            <button onClick={Increase}>Increase(+1)</button>
            <button onClick={Decrease}>Decrease(-2)</button>
        </div>
    )
}

export default FunctionPractice;