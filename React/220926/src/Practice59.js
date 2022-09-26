import React, {useState} from "react";

function Practice59() {
    // 테이블 내용 담는 state
    const [list, setList] = useState([]);
    // 내가 검색한 결과 담고있는 state
    const [result, setResult] = useState([]); 

    function writeList() {
        let form = document.getElementById('form_writer');
        let newList = {
            writer: form.writer.value, 
            title: form.title.value
        }

        setList([...list, newList]);
        // list = [{writer:~~~, title:~~~}, {writer:~~~, title:~~~}, {writer:~~~, title:~~~}]
    }

    // 검색 기능
    function searchList() {
        let form = document.getElementById('form_search'); 

        // 작성자 기준으로
        let newList = list.filter((result) => {
            // result = {writer: ~~ , title: ~~~~}
            return result[form.type.value].includes(form.search.value);
        }); 
        setResult(newList);
    }

    return (
        <div>
            <h1>실습 59</h1>
            {/* 표 내용 입력 부분  */}
            <form id="form_writer">
                <input 
                    type='text'
                    name='writer'
                    placeholder="작성자" />
                <input 
                    type='text'
                    name='title'
                    placeholder="제목" />
                <button type='button' onClick={writeList}>작성</button>
            </form>

            {/* 검색 부분 */}
            <form id="form_search">
                <select name="type">
                    <option value='writer'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input 
                    type='text'
                    name='search'
                    placeholder="검색어" />
                <button type='button' onClick={searchList}>검색</button>
            </form>

            {/* 방명록 표 */}
            <table border={1}>
                {/* 표제목 */}
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                {/* 표 내용 */}
                <tbody>
                    {list.map((value, i) => {
                        // value = {writer:~~~, title:~~~}
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
            {/* 삼항연산자 사용하여 결과 없는 경우 보여줌 */}
            {
                result.length > 0 ? 
                (
                    <div>
                        <h4>검색 결과</h4>
                        <table border={1}>
                            {/* 표제목 */}
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                </tr>
                            </thead>
                            {/* 표 내용 */}
                            <tbody>
                                {result.map((value, i) => {
                                    // value = {writer:~~~, title:~~~}
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{value.title}</td>
                                            <td>{value.writer}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                ) : (
                    <h5>검색결과가 없습니다.</h5>
                )
            }
        </div>
    )
}

export default Practice59;