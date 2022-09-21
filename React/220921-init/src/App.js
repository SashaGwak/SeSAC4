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

  let cat = '뚠뚜니';
  let animal = '고양이'; 

  let a = 10; 
  let b = 3; 

  return (
    <div> 
    <div className='rainbow'>
      <div className='red'></div>
      <div className='orange'></div>
      <div className='yellow'></div>
      <div className='green'></div>
      <div className='blue'></div>
      <div className='navy'></div>
      <div className='purple'></div>
    </div>

    <br />
    <br />
    <br />
    <div className='test'>
      <div className='helloBox'>Hello World</div>
        <div>
          아이디 : <input></input><br />
          비밀번호 : <input></input>
        </div>


    {/* jsx 실습 */}
    <div className='practice' style={{
      backgroundColor: 'yellow', 
      color:'blue'
    }}>
      이 것은 div 입니다. 
      <h3>이것은 div안에 있는 h3태그 입니다</h3>
      제 반려동물의 이름은 { cat } 입니다.<br />
      {cat}는 {animal} 입니다.<br />
      { name }
      {/* 연산자 사용방법 2 
      삼항연산자로 쓰는 방법 
      조건? 참인 경우 실행문: 거짓일 경우 실행문 */}
      { flag ? (<h1>True</h1>): <h2>False</h2> }
      { 3 + 5 == 8 ? (<h1>정답입니다!</h1>): <h1>오답입니다!</h1>}
      { a > b ? (<h1>a가 b보다 큽니다!</h1>): <h1>a가 b보다 작습니다!!</h1>}
    </div>
    </div>
    </div>

  );
}

export default App;
