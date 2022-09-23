// input창이 여러개라면 ?! 
// 여러개 매서드를 만들어도 되지만, event객체를 사용하여 쉽게처리하는 것이 바람직
import React, {Component} from 'react';

class ManyInput extends Component {
    state = {
        username: "",
        message: ""
    }

    // eventChange 하나로 합쳐주기
    eventChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
            // key를 []로 감싸면 그 안에 넣은 실제 값이 key값으로 사용됨
            /*
            예시 
            const name = "key";
            const obj = {
            [name]: "value"
            };
            결과 값이 "key":"value"
            */
        });
    }

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({username: "", message: ""});
    }

    eventKeyPress = (e) => {
        if( e.key === "Enter" ) {
            this.eventClick();
        }
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트!!</h1>

                <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름"
                    value={this.state.username}
                    onChange={this.eventChange}/>

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value={this.state.message}
                    onChange={this.eventChange}
                    onKeyPress={this.eventKeyPress}/>


                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default ManyInput;