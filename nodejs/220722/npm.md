# npm 
Node Package Manager
노드 패키지를 관리해주는 틀

## 패키지
* NPM에 업로드 된 노드 모듈
* 패키지 간의 의존 관계가 존재

## NPM 사용하기 
1. npm init
    * 프로젝트를 시작할 때 사용하는 명령어
    * package.json에 기록될 내용을 
2. npm init --yes
    * package.json에 기록될 내용을
3. npm install 패키지 이름
    * 프로젝트에서 
    * 설치된 패키지

## package.json

## Express 
웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크 
웹 애플리케이션을 만들기 위한 각종 메소드와 
* express ()
    - Express 모듈이 export하는 최상위 함수로, express application을 만듦
* app 객체
* app 객체의 method
    - get : 요청을 받을 때 하는거, 내가 어떤 정보를 원할때, 서버 요청할때 ex)주소에 보임
    - post : 일반적으로는 뭔가를 생성할때 쓴다. ex)회원가입할 때 새로운 것이 생성되지만 주소에 정보가 보이지 않음
    - put : 어떤 것을 수정할때 쓴다.(전체) 
    - delete : 보내는 객체를 삭제 
    - patch : 수정할 때 쓴다. put은 모두 덮어쓰며 수정되는 반면 patch는 내가 수정할 값(일부)만 바꿀 수 있음 

## 미들웨어
### static
* 이미지, css 파일 및 javascript 파일과 같은 정적 파일 제공
* Express에 있는 static 메소드를 이용해 미들웨어로 로드

## 템플릿 엔진
문법과 설정에 따라 파일을 html 형식으로 변환시키는 모듈 
### ejs 
Embedded javascript의 약자로, 자바스크립트 