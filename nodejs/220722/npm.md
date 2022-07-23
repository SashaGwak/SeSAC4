# npm 
Node Package Manager
노드 패키지를 관리해주는 틀


## 패키지
* NPM에 업로드 된 노드 모듈
* 패키지 간의 의존 관계가 존재


## NPM 사용하기 
* npm init
    * 프로젝트를 시작할 때 사용하는 명령어
    * package.json에 기록될 내용을 문답식으로 입력한다. 그냥 엔터누르면 기본값
* npm init --yes
    * package.json이 생성될 때 기본값으로 생성된다
* npm install 패키지 이름
    * 프로젝트에서 사용할 패키지를 설치하는 명령어
    * 설치된 패키지의 이름과 정보는 pakage.json의 dependencies에 입력된다


## package.json
- 패키지들이 서로 의존되어 있어 문제가 발생할 수 있는데 이를 관리하기 위한 것 
- 프로젝트에 대한 정보와 사용 중인 패키지 이름 및 버전 정보가 담겨있는 파일
- dependencies에 모듈 설치 정보 기재되어 있어서 다른 컴퓨터로 옮기면 npm install 해주면 설치 가능! 


## Express 
웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크 
웹 애플리케이션을 만들기 위한 각종 메소드와 미들웨어 등이 내장되어 있다
* express ()
    - Express 모듈이 export하는 최상위 함수로, express application을 만듦
* app 객체
    - express() 함수를 호출함으로써 만들어진 express application
* app 객체의 method
    - http 요청을 각 요청에 맞는 경로로 전송하는 메소드(라우팅)
        + get : 요청을 받을 때 하는거, 내가 어떤 정보를 원할때, 서버 요청할때 ex)주소에 보임
        + post : 일반적으로는 뭔가를 생성할때 쓴다. ex)회원가입할 때 새로운 것이 생성되지만 주소에 정보가 보이지 않음
        + put : 어떤 것을 수정할때 쓴다.(전체) 
        + delete : 보내는 객체를 삭제 
        + patch : 수정할 때 쓴다. put은 모두 덮어쓰며 수정되는 반면 patch는 내가 수정할 값(일부)만 바꿀 수 있음 


## 미들웨어
* 요청이 들어옴에 따라 응답까지의 중간과정을 함수로 분리한 것 
* 서버와 클라이언트를 이어주는 중간 작업 
* use()를 이용해 등록할 수 있다
    1. static 
        * 이미지, css 파일 및 javascript 파일과 같은 정적 파일 제공
        * Express에 있는 static 메소드를 이용해 미들웨어로 로드
        ```javascript
        app.use( express.static('public'));
        <!-- 기본형 -->
        app.use('/static', express.static('public'));
        <!-- 가상 경로 지정해주는 것 -->
        ```


## 템플릿 엔진
문법과 설정에 따라 파일을 html 형식으로 변환시키는 모듈 
### ejs 
* Embedded javascript의 약자로, 자바스크립트가 내장되어있는 html 파일
* 확장자는 .ejs
```js
app.set('view engine', 'ejs'); 
// views 폴더에 ejs확장자 파일 사용! 
```
```ejs
<% %> 
<!-- 무조건 자바스크립트 코드가 들어가야 하고, 줄바꿈을 할 경우 새로운 <% %> 필요 -->
<%= %>
<!-- 변수의 값을 출력할 때 사용  -->
<%- include('view의 상대주소')%>
<!-- 다른 view 파일을 불러 올때 사용 -->
```