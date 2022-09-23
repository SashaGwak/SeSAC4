## React 프로젝트 생성 
```bash
npx create-react-app 앱이름 
# 앱 이름에는 대문자 사용 불가, 대문자 대신 대시(-) 사용하기
```

## npx? 
* npm의 자식 명령어로 npm보다 가볍게 패키지를 구성
* npm 버전이 5.2 이상일 때, node 버전이 14이상일때 사용가능 

## Jsx 사용하기
### Js 기본 사용 및 연산자 사용
```js 
import './App.css'
import React from 'react'

function App() {
  /* 
  연산자 사용방법 1 
  계산다한 후 변수에 담아서 jsx문법에서 보여주기
  */ 
  const flag = true; 
  var name = ''; 
  if (flag) name = 'SeSAC'; 
  else name = '문래';

  let cat = '뚠뚜니';
  let animal = '고양이'; 

  let a = 10; 
  let b = 3; 

  return (
    <> 
      <div className='practice' style={{
        backgroundColor: 'yellow', 
        color:'blue'
      }}>
      이 것은 div 입니다. 
      <h3>이것은 div안에 있는 h3태그 입니다</h3>
      제 반려동물의 이름은 { cat } 입니다.<br />
      {/* js 문법 사용할 때는 {}로 감싸서 사용 */} 
      {cat}는 {animal} 입니다.<br />
      { name }
      {/* 연산자 사용방법 2 
      삼항연산자로 쓰는 방법 
      조건? 참인 경우 실행문: 거짓일 경우 실행문 */}
      { flag ? (<h1>True</h1>): <h2>False</h2> }
      { 3 + 5 === 8 ? (<h1>정답입니다!</h1>): <h1>오답입니다!</h1>}
      { a > b ? (<h1>a가 b보다 큽니다!</h1>): <h1>a가 b보다 작습니다!!</h1>}
        </div>
    </>
  );
}

export default App;
```

## Component 
### 클래스형 컴포넌트 
```js
import React from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트 쓸때는 이런식으로 적어주기  
// class 클래스이름 extends Component(Component를 불러와서 꼭 써줘야함)
class ClassComponent extends Component {
    // 클래스형은 무조건 render함수 써줘야함 
    render() {
        return (
            <>
                {this.props.children} 
                {/* 태그 사이의 문자들을 이렇게 children으로 보낼 수 있어용  */}
                <h2>ClassComponent - function</h2>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </>
        );
    }

    // 이렇게 타입 지정해줘도 됨
    static defaultProps = {
        name: '기본 이름',
    }
    static propTypes = {
        name: PropTypes.string
    }
}

export default ClassComponent;
```

### 함수형 컴포넌트 
```js
import React from 'react';
import PropTypes from 'prop-types';
// 함수형 컴포넌트 
function ClassComponent(props){
    return (
        <>
        {props.children} 
        {/* 태그 사이의 문자들을 이렇게 children으로 보낼 수 있어용  */}
        <h2>ClassComponent - function</h2>
        <h5>name : {props.name}</h5>
        <h5>location : {props.location}</h5>
        </>
    )
}

// 클래스형과 함수형 모두 아래와 같이 기본값, 타입 지정가능 
// 만약 부모에서 값 안보내줄 수도 있으니 기본 값 설정해주기 
ClassComponent.defaultProps = {
    name : '기본 이름', 
    location : '기본 위치'
};
// props 타입 지정해주기 -> 거의 실행은 되지만... 걸러주기위하여 
ClassComponent.propTypes = {
    name : PropTypes.string 
};

export default ClassComponent;
```

### 이미지 보여주기 
```js
import React from 'react';
import './App.css'

function Books(props) {
    return (
        <> 
            <div className='books'>
                <h1>이번주 베스트셀러</h1>
                <img src='img/bookimage.png' alt='베스트셀러' style={{width: '200px'}}/>
                {/*
                public 파일내 img파일이 있는경우임 
                이럴 때는 img부터 경로 시작  
                */}
                <h3>{props.content}</h3>
                <p>저자 : {props.name}</p>
                <p>판매가 : {props.price}</p>
                <p>구분 : {props.type}</p>
            </div>
        </>
    )
}

export default Books;
```

### 함수 실행하기 
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css'

class ClassPractice extends Component {
    // 함수 정의
    print(data) {
        return console.log(data); 
    };

    render() {
        return (
            <>
                <h2>{this.props.text}</h2>
                {/* prop까지 보내주는 함수는 아래와 같이 작성
                그냥 함수만 실행해주는거라면 onClick={함수명} 으로 작성도 가능 
                */}
                <button onClick={() => this.print(this.props.valid)} >콘솔 메세지</button>
            </>
        );

    }
    static defaultProps = {
            text: '이건 기본 text props입니다.',
    }
    static propTypes = {
            text: PropTypes.string
    }
    
};

export default ClassPractice;
```