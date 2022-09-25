## 함수형 컴포넌트시 이벤트 사용
### 기본 형식
```js
import React, {useState} from 'react';

function StateFunction() {
    const [msg, setMsg] = useState('');
    const [list, setList] = useState([]); 
    // this.state {
    //     msg: ''
    // } 와 같은 의미 

    function changeMsg() {
        setMsg('메세지')
        setList([])
        // setState({msg:'메세지']})
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;
```

### input이 여러개일때 event를 하나로 정의해주는 방법
```js
const ManyFunction2 = () => {
    const [form, setForm] = useState({username: "", message: ""});
    const {username, message} = form;
    // onChange하나로 합쳐주기(input많을 경우 대비)
    const onChange = (e) => {
        const nextForm = {
            // 문자열이 아닌 객체를 넣은 것 
            ...form,
            [e.target.name]: e.target.value
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ": " + message);
        setForm({username: "", message: ""})
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChange}/>

            <input
                type="text"
                name="message"
                placeholder="이곳에 입력해보세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}/>

            <button onClick={onClick}>클릭</button>
        </div>
    );
}


export default ManyFunction;
```

## (보너스) 윈도우 기본동작 방지하기
* preventDefault: 윈도우의 기본동작을 방지 
    * 주로 사용하는 경우 
        * a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
        * form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
        * 엔터 등 눌렀을 때 작동되지 않도록 막아줌
```js
// 기본 구문 
event.preventDefault();

// js 사용 예시(체크박스 클릭 기본 동작 방지)
document.querySelector("#id-checkbox").addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>";
         event.preventDefault();
}, false);
```
* [이외 기본 동작 방지, 사용자 누른 키 관찰해서 허용 여부 결정하기](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)