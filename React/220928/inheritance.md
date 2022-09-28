# 객체지향 VS 절차지향 프로그래밍

## 절차 지향 프로그래밍 
* 프로그래밍을 기능 중심으로 바라보는 방식
* 절차적으로 프로그램 과정을 진행 
* 무엇을 어떤 절차로 할 것인가? 어떤 순서로 처리할 것인가? 

## 객체지향 프로그래밍
* OOP (object-Oriented Programming)
* 많은 역할을 할 경우 객체로 묶어서 처리

### OOP 
* 상속 : 구현시 계층을 표현하기 위해 사용되는 개념 
* 하위 객체는 상위객체의 특징(메소드, 변수 등)을 물려받아 사용할 수 있음

## 상속의 형태 
### 1.extends 
* 부모에서 선언/정의를 모두하고, 부모의 메소드/변수를 그대로 사용 가능 
* Overriding도 가능 

### 2.Implements 
* 부모 객체는 선언만, 정의는 반드시 자식이 진행 
* 부모의 특징을 도구로 사용해 새로운 특징 제작 

### 3.abstract 
* extends와 interface의 혼합

## 상속 코드 예시
```js 
class Shape {
  constructor(w, h){
    this.w = w; 
    this.h = h;
  }
  getArea(){
    return this.w * this.h;
  }
}

// 그냥 이렇게 지정해줘도 부보인 Shape정보 가져와서 당근 사용가능 
class Square extends Shape{
}

class Triangle extends Shape{
  constructor(x, y, name){
    // constructor는 부모꺼 재정의해줄수 없어서 부모가 정의해준 부분은 그대로 써줘야함
    // 부모 불러오는 건 super() 사용
    super(x, y);
    this.name = name;
  }
  getArea(){
    // 자식이 자신만의 함수를 재정의 해줬으므로 자식의 함수가 실행됨
    return this.name + ' : ' + (this.w * this.h/2);
  }
}

let shape1 = new Shape(5,4); 
console.log(shape1.getArea());

let Shape2 = new Shape(2,3); 
console.log(Shape2.getArea());

// 얘도 사용가능
let Shape3 = new Square(4, 8); 
console.log(Shape3.getArea());

let Shape4 = new Triangle(4, 8, '시하'); 
console.log(Shape4.getArea());
```