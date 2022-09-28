function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

class Shape {
  constructor(w, h){
    this.w = w; 
    this.h = h;
  }
  getArea(){
    return this.w * this.h;
  }
}

class Square extends Shape{
}

class Triangle extends Shape{
  constructor(x, y, name){
    // constructor는 부모꺼 재정의해줄수 없어서 부모가 정의해준 부분은 그대로 써줘야함
    super(x, y);
    this.name = name;
  }
  getArea(){
    // 자식이 자신만의 함수를 재정의 해줬으므로 자식의 함수가 실행됨
    return this.name + ' : ' + (this.w * this.h/2);
  }
}

class Student {
  constructor(name, school, age, num){
    this.name = name; 
    this.school = school;
    this.age = age;
    this.num = num;
  }
  getData(){
    return ( this.name + '('+this.school + ')'+ ' => ' + this.age + '살 ' + this.num );
  }
}

class Kim extends Student{
}
class Lee extends Student{
}

let shape1 = new Shape(5,4); 
console.log(shape1.getArea());

let Shape2 = new Shape(2,3); 
console.log(Shape2.getArea());

let Shape3 = new Square(4, 8); 
// 얘도 사용가능
console.log(Shape3.getArea());

let Shape4 = new Triangle(4, 8, '시하'); 
console.log(Shape4.getArea());

let kimdata = new Kim('김삿갓', '삿갓중', 15, 1234);
console.log(kimdata.getData())
let Leedata = new Lee('이떙떙', '땡떙고', 19, 12345);
console.log(Leedata.getData())
