import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Books from './book';
import ClassComponent from './classComponent';
import PropsPractice from './practice';
import ClassPractice from './classpractice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ClassPractice text='App컴포넌트에서 넘겨준 text prop입니다.' valid='콘솔 띄우기 성공!!!'/>
    <ClassPractice />
    <Books content='고양이의 기분을 이해하는 법:반려묘와 행복하게 살기 위해 알아야 할 모든 것' name='고양이의 기분을 이해하는 법' price='10,800원' type='반려동물'/>
    <PropsPractice food="햄버거"/>
    <PropsPractice />
    <ClassComponent name="SeSAC" location="문래" />
    <ClassComponent location="여긴어디" />
    <ClassComponent name={5} location="문래" />
    {/* 숫자는 꼭 중괄호 필요  */}
    <ClassComponent name={5} location="문래">칠드런런</ClassComponent>
    <App />
  </>
);