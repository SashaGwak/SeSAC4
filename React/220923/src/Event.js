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
                    // e는 SyntheticEvent(합성이벤트) -> 브라우저의 고유한 이벤트가 아니라, 리액트만의 이벤트라는 것
                    // SyntheticEvent는 이벤트가 끝나고나면 초기화되어 정보를 참조할수 없음. 따라서 1초 뒤에 e객체를 참조해보면 e객체안에 값이 없다는 것
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
