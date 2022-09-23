import React, {Component} from 'react';

class EventClass extends Component {
    state = {
        message: ""
    }

    // 생성자 메서드 정석 
    constructor(props) {
        super(props);
        this.eventChange = this
            .eventChange
            .bind(this);
            // bind는 this가 자신을 제대로 가리키기 위해 사용
            // this가 결정되면서 임의 메서드가 특정 html요소의 이벤트로 등록되면서 관계가 끊어지게 되는데, 이때 바르게 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 과정임
            // 만약 바인딩을하지 않는다면 this는 undefined가 된다 
        this.eventClick = this
            .eventClick
            .bind(this);
    }

    eventChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    eventClick() {
        alert(this.state.message);
        this.setState({
            message: ""
        });
    }

    /*
    // 생성자 메서드 쉽게 정의하는 방법 	
    state = {
        message: ""
    }

    // 아래와 같이 화살표 형태로 작성하면 좀 더 간단 
    eventChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
 
    eventClick = () => {
        alert(this.state.message);
        this.setState({
            message: ""
        });
    }
    */ 

    render() {
        return (
            <div>
                <h1>리액트의 이벤트(클래스)!!</h1>

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value={this.state.message}
                    onChange={this.eventChange}/>

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default EventClass;