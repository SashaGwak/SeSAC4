import React, {useState} from 'react';
import app from './App.css';

const Borad = () => {
    const [form, setForm] = useState({name: "", content: ""});
    const {name, content} = form;
    const [list, setList] = useState([]);
    let search = '';

    const onChange = (e) => {
        const nextForm = {
            // 문자열이 아닌 객체를 넣은 것 
            ...form,
            [e.target.name]: e.target.value
        };

        setForm(nextForm);
        // {name: 'ㅇㄴㄹㄴㅇㄹ', content: 'ㄴㅇㄹㄴㅇㄹ'}
    };

    const onClick = () => {
        let result = {name: name , content:content};
        setList([...list, result]);
        setForm({name: "", content: ""});
        // console.log(result);
        // {name: 'ㅇㄴㄹㄴㅇㄹ', content: 'ㄴㅇㄹㄴㅇㄹ'}
        console.log(list);
        // [{name: 'ㅇㄴㄹㄴㅇㄹ', content: 'ㄴㅇㄹㄴㅇㄹ'}, {name: 'ㅇㄴㄹㄴㅇㄹ', content: 'ㄴㅇㄹㄴㅇㄹ'} ... ]
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
            <div className='input_box'>
                작성자 : <input
                    type="text"
                    name="name"
                    value={form.search}
                    placeholder="검색어"
                    onChange={onChange}
                    onDoubleClick={nameDelete}/>

                제목 : <input
                    type="text"
                    name="content"
                    placeholder="내용"
                    value={form.content}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    onDoubleClick={emailDelete}/>

                <button onClick={onClick}>작성</button>
            </div>
            {/* 검색 */}
            <div>
                <select>
                    <option value="">작성자</option>
                    <option value="">제목</option>
                </select>
                <input
                    type="text"
                    name="search"
                    // value={form.name}
                    placeholder="이름"
                    onChange={(e) => {
                        let search = e.target.value
                        console.log(search);
                    }}
                    onDoubleClick={nameDelete}/>
                </div>

            {/* 테이블 시작  */}
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                        {list.map((value, i) => {
                            return (<tr>
                                <th>{i + 1}</th>
                                <th>{value.name}</th>
                                <th>{value.content}</th>
                            </tr>);
                        })}
                </thead>
            </table>
        </div>
    );
}

export default Borad;