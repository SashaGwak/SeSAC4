import {useRef, useEffect, useState, useMemo, useCallback} from 'react';

// 평균값을 구해주는 함수
function getAverage(list) {
    console.log('getAverage');
    let sum = 0;
    if (list.length == 0) return sum; 
    for (let i =0; i< list.length; i++){
        sum = sum + list[i];
    }
    return sum / list.length;
}

// 연산을 최적화 시켜주는 hook
const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef(null);
    // 그냥 useRef()로 써주는데 초기값넣거나 없다는 의미로 useRef(null)이라고 쓰기도 함
    // ref.current 로 현재 가리키는 객체에 접근할 수있다

    /* useCallback 안쓰고 정의하면
    // const onChange = (e) => {
    //     setNum(e.target.value);
    // }

    // const onInsert = (e) => {
    //     setList([...list, parseInt(num)]); 
    //     console.log(list);
    //     setNum(0);
    // }
    */

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
        input.current.focus();
    }, [num, list])

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