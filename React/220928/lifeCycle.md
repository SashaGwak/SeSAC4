# LifeCycle
* 수명 주기
* 모든 React Component 에 존재하는 것

## 그림으로 보는 LifeCycle
<img width="875" alt="image" src="https://user-images.githubusercontent.com/92668655/192720484-dc0c8b30-1c88-4280-8d44-99a0585bb12a.png">

### mount 
* DOM 이 생성되고 웹 브라우저상에 나타나는 것
* constructor, render, getDerivedStateFromProps, componentDidMount

### update 
* Props나 state가 바뀌었을 때 업데이트하는 것
* getDerrivedStateFromProps, shouldComponentUpdate, componentDidUpdate

### unmount
* 컴포넌트가 화면에서 사라질(제거될) 때
* comopnentWillUnmount

### 코드로 보는 Lifecycle
```js
import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '1',
      age: 1
    }
  }
  // 새로 페이지를 보여줄 때 DOM이 생성되며 실행
  componentDidMount() {
    console.log( "componentDidMount" );
  }
  
  // useState를 사용하는 등 정보 바뀌었을때 업데이트 하면서 실행
  componentDidUpdate(props, state){
    console.log( "componentDidUpdate" );
    console.log( "props : ", props );
    console.log( "State : ", state );
    console.log( "this.state : ", this.state );
    if ( state.age !== this.state.age ) {
        console.log( "age change" );
    }
  }

  // 컴포넌트 화면에서 사라지기 직전 실행
  componentWillUnmount() {
    console.log( "componentWillUnmount" );
  }

  render() {
    return (
      <div>
        라이프사이클 {this.state.name}
        <button onClick={() => {this.setState({name:'hi'})}}>버튼</button>
        <button onClick={() => {this.setState({age:2})}}>버튼</button>
      </div>
    );
  }
}
export default LifeCycle;
```