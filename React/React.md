## React JS
* 동적 사용자 인터페이스를 만들기 위해 2011 페이스북에서 만든 오픈소스 JavaScript 라이브러리 
* 데이터 변경이 잦은 복잡하고, 규모가 큰 라이브러리에 적합 
* Angular 보다 배우기 쉽ㄱ다고 이야기 됨 
* ex) 페이스북, 인스타그램, 넷플릭스, 야후, 드롭박스 등등

## Veu.js 
* 2013년 출시된 JavaScript 프레임워크 
* Angular가 React 장점을 수용한 프레임 워크 
* 중국어 기반으로 Reference가 적음 
* ex) 샤오미, 알리바바, 깃랩, 어도비 등 

## React의 특징 
### 1.Data Flow
* 양방향 X, 단방향 데이터 흐름 
* Angular JS 처럼 양방향 데이터 바인딩은 규모가 커질수록 데이터의 흐름을 추적하기 힘들고 복잡해지는 경향이 있다. 

### 2.Component 기반 구조 
* Component : 독립적인 단위의 소프트웨어 모듈로 소프트웨어를 독립적인 하나의 부품으로 만드는 방법
* React는 UI(View)를 여러 Component로 쪼개서 만든다 
* 한 페이지 내에서 여러 부분을 Component로 만들고 이를 조립해 화면을 구성
* 장점 
    * component 단위로 쪼개져 있기 때문에, 전체 코드를 파악하기 쉽다. 
    * 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문에 재사용성이 높다 
    * 코드를 반복할 필요 없이 Component만 import해서 사용하면 된다는 간편함이 있다
    * 애플리케이션이 복잡해지더라도 코드의 유지보수, 관리가 용이하다 

### 3.Virtual DOM
* DOM : Document Object Model(문서 객체 모델)
* React는 DOM Tree와 같은 구조를 Virtual DOM으로 가지고 있다
* 이벤트가 발생할 때마다 Virtual DOM을 만들고 다시 그릴 때 실제와 전후 상태를 계속 비교 
    -> 앱의 효율성과 속도 개선

### 4.Props and State
* Props 
    * 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터 
    * 자식에서는 props 변경 불가능, props를 전달한 최상위에서만 변경 가능
* State
    * 컴포넌트 내부에서 선언되고 내부에서 값을 변경
    * 클래스형 컴포넌트에서만 사용가능, 각각의 state는 독립적(함수형에서는 NO! )

### 5.JSX
* React에서 JSX 사용이 필수는 아니지만 많이 사용된다 
* JSX = javascript + XML

## Component
    * React의 꽃이라 불리는 핵심 
    * MVC view를 독립적으로 구성해 재사용 할 수 있고, 새로운 컴포넌트도 만들 수 있다
    * 데이터(props)를 입력받아 View(state) 상태에 따라 