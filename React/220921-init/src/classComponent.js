import React from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트 쓸때는 이런식으로 적어주기  
// class 클래스이름 extends Component(Component를 불러와서 꼭 써줘야함)
// class ClassComponent extends Component {
//     // 클래스형은 무조건 render함수 써줘야함 
//     render() {
//         return (
//             <>
//                 {this.props.children} 
//                 {/* 태그 사이의 문자들을 이렇게 children으로 보낼 수 있어용  */}
//                 <h2>ClassComponent - function</h2>
//                 <h5>name : {this.props.name}</h5>
//                 <h5>location : {this.props.location}</h5>
//             </>
//         );
//     }

    // 이렇게 타입 지정해줘도 됨
    // static defaultProps = {
    //     name: '기본 이름',
    // }
    // static propTypes = {
    //     name: PropTypes.string
    // }
// }

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
