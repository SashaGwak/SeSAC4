 import React, { useState } from "react";
 
//  방법 1
const ManyFunction = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    // input이 두개밖에 없어서 이렇게 해줘도 괜찮긴해 
    const onChangeUsername =(e) => setUsername(e.target.value);
    const onChangeMessage =(e) => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ": " + message);
        setUsername("");
        setMessage("");
    };
    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    };
 
    return (
        <div>
            <h1>리액트의 이벤트!!</h1>
 
            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChangeUsername}
            />
 
            <input
                type="text"
                name="message"
                placeholder="이곳에 입력해보세요."
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
 
            <button onClick={onClick}>클릭</button>
        </div>
    );
}


// 방법 2
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
            <h1>리액트의 이벤트!!</h1>

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