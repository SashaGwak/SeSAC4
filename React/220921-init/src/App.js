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

  const style = {
    backgroundColor: 'yellow', 
    color:'blue'
  };

  return (
    <div className='test' style={{
      backgroundColor: 'yellow', 
      color:'blue'
    }}>
      이 것은 div 입니다. 
      <h3>이것은 div안에 있는 h3태그 입니다</h3>
      { name }
      {/* 연산자 사용방법 2 
      삼항연산자로 쓰는 방법 
      조건? 참인 경우 실행문: 거짓일 경우 실행문 */}
      { flag ? (<h1>True</h1>): <h2>False</h2> }
    </div>
  );
}

export default App;
