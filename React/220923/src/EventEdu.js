function EventEdu() {
    function clickEvent(e) {
        console.log(e);
    }
    function aClick(e) {
        // preventDefault: 윈도우의 기본동작을 방지 
        // 엔터를 눌렀을때나 조건을 추가해서 기본동작을 막아주는 애 
        e.preventDefault();
        console.log('aClick'); 
        console.log(e);    
    }
    return (
        <div>
            <h1>규리쌤 강의</h1>
            <a href="#" onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}

export default EventEdu;