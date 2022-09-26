import React, {useState} from 'react';

const Event_ex = () => {
    const [form, setForm] = useState({name: "", email: ""});
    const {name, email} = form;
    const [list, setList] = useState(['코디 : codi@gamil.com', '윤소희 : yoonsohee@gmail.com']);

    const onChange = (e) => {
        const nextForm = {
            // 문자열이 아닌 객체를 넣은 것 
            ...form,
            [e.target.name]: e.target.value
        };
        console.log(nextForm);
        setForm(nextForm);
    };

    const onClick = () => {
        let result = name + " : " + email;
        setForm({name: "", email: ""});
        setList([...list, result]);
        console.log(result);
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    const nameDelete = () => {
        console.log('메롱')
        setForm({name: ""});
    } 
    const emailDelete = () => {
        setForm({email: ""});
    } 

    return (
        <div>
            <input
                type="text"
                name="name"
                value={form.name}
                placeholder="이름"
                onChange={onChange}
                onDoubleClick={nameDelete}/>

            <input
                type="email"
                name="email"
                placeholder="이메일"
                value={form.email}
                onChange={onChange}
                onKeyPress={onKeyPress}
                onDoubleClick={emailDelete}/>

            <button onClick={onClick}>클릭</button>
            <div>
                <ul>
                {list.map((value) => {
                    return <h3>{value}</h3>
                })}
                </ul>
            </div>
        </div>
    );
}

export default Event_ex;