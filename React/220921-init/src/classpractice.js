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