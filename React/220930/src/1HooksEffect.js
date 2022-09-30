import {useState, useEffect} from 'react';

const Hook = () => {
    const [name, setName] = useState(''); 
    const [cnt, setCnt] = useState(0); 

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeCnt = () => {
        setCnt(cnt + 1);
    }

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
        console.log("name1 : " ,name);
        return () => {
            console.log("name2 : ", name);
        }
    });
    // 뒷정리함수를 이용해서 업데이트 하기 직전 값을 확인할 수 있음 

    return(
        <>
        <div>
            <input value={name} onChange={changeName}/>
            <button onClick={changeCnt}>+1</button>
        </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </>
    )
}

export default Hook;