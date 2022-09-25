## Event Handling

### React의 Event 주의점
1. React의 이벤트는 소문자가 아닌 카멜 케이스 ( camelCase )를 이용해야 함
2. JSX를 사용해 이벤트 핸들러를 전달해야 함
```js
// HTML Event
<button onclick="activeEvent();">
    Event Button
</button>

// React Event
<button onClick={ activeEvent }>
    Event Button
</button>
```
3. 기본 DOM 요소에만 이벤트를 설정할 수 있다.
    * 다른 태그에 만약 onClick을 쓰면 onClick이라는 Prop값이 넘어가게 됨

### Synthetic Event(합성 이벤트)
* 객체를 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 Wrapper(래퍼) 객체
* 브라우저의 고유한 이벤트가 아니라, 리액트만의 이벤트라는 것
* SyntheticEvent는 이벤트가 끝나고나면 초기화되어 정보를 참조할수 없음. 따라서 1초 뒤에 e객체를 참조해보면 e객체안에 값이 없다는 것
```js
import React, {Component} from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                <h1>리액트의 이벤트!!</h1>

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    // e는 SyntheticEvent(합성이벤트) 
                    onChange={(e) => {
                        console.log(e);
                        // 이벤트 객체 자체가 출력됨
                        /* 
                        SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
                        */
                        console.log(e.target.value);
                        // 인풋값의 변화를 보고싶으면 위와 같이 써야함
                    }
}/>
            </div>
        );
    }
}

export default Event;
```

## 클래스 컴포넌트시 주의
### this 사용 필요
* 클래스형 컴포넌트에서는 this를 사용해야 함수를 찾아갈 수 있음(state와 props와 동일)
```js
<button onClick={this.printConsole2}>printConsole2</button>
```

### 함수 연결해주기(bind사용 or allow Function)
* 동일하게 함수 인자보낼때도 화살표 함수 쓰면 편해용
```js
// Allow function 예시
import React, {Component} from 'react'; 

class EventEdu2 extends Component{
    // 안되는 거
    printConsole() {
        console.log('printConsole');
        console.log(this); 
        // 연결끊어져서 디스 안나옴
    }

    // 되는거
    printConsole2 = () => {
        console.log('printConsole');
        console.log(this);
    }

    printConsole3 = (msg) => {
        console.log('printConsole');
        console.log(msg);
        console.log(this);
    }
    

    render() {
        return (
            <div>
                <button onClick={this.printConsole}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
                <button onClick={() => {this.printConsole3('2')}}>파라미터</button>
                {/* 클래스형 컴포넌트에서는 그냥 printConsole쓰면 안되고 꼭 this붙여줘야 여기 함수를 찾을 수 있음  */}
            </div>
        )
    }
}

export default EventEdu2;
```
```js
// bind 사용 예시
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
```

### 현재 값을 반환하는 prevState 
```js 
import React, {Component} from "react";
class StateClass extends Component {
    state = {
        name : "SeSAC",
        cnt: 0, 
        list : ["s", "e", "s", "a", "c"]
    };
    render(){
        return(
            <div>
            <div>{this.state.name} StateClass {this.state.cnt}</div>
            <button onClick={()=>{
                this.setState(prevState => {
                    // prevState는 기존상태를 가져온 친구
                    return {cnt: prevState.cnt + 1}
                }); 
                this.setState(prevState => {
                    return {cnt: prevState.cnt + 1}
                }); 
            }}>클릭</button>
            <button onClick={()=>{this.setState({list: ["c", "l", "i"]})}}>클릭</button>
            <ul>
                {this.state.list.map((txt) => {
                return <li>{txt}</li>
                })}
            </ul>
            </div>
        )
    }
}

export default StateClass;
```