import React, {Component, createRef} from "react";

class Ref extends Component{
    event1(){
        let input = document.getElementById('input1');
        console.log(input.value);
    }

    event2 = () => {
        console.log(this.input.value);
    }

    // ref 사용방법 2 -> 내장함수 createRef사용하기
    // 사용할 때는 this.변수명.current 를 이용
    input3 = createRef();
    event3 = () => {
        console.log(this.input3.current.value);
    }
    render() {
        return (
            <>
            <div>
                <input type="text" id='input1' />
                {/* 만약 index에서 이 컴포넌트를 중복해서 사용할 때 아이디는 기본적으로 맨위의 아이디를 읽어오기때문에 
                여러개 있더라도 가장 위의 찾는 id와 동일한 id를 가진 애만 인식하게 되는 문제 발생한다.  */}
                <button onClick={this.event1}>버튼1</button>
            </div>
            <div>
                {/* ref 사용방법 1 콜백함수 사용하기 */}
                <input type="text" ref={(ref) => {this.input = ref} } />
                {/* ref가 의미하는게 그 태그를 의미함. 여기서는 input을 의미하는 것. 그 input을 this.input에 넣어준 것 -> 왜냐? 다른 곳에서 이벤트 지정할때도 써야하니까!! */}
                <button onClick={this.event2}>버튼2</button>
            </div>
            <div>
                <input type="text" ref={this.input3} />
                <button onClick={this.event3}>버튼3</button>
            </div>
            </>
        )
    }
}

export default Ref;


