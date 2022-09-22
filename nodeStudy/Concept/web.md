## 웹의 원리 
* Client -> Request -> Server -> Response -> Client
* 클라이언트인 브라우저가 서버에 요청을 보내면 서버가 데이터베이스에 접촉해 파일을 다룬 후 HTML 혹은 다른 종류의 응답을 클라이언트에 발송하고 브라우저가 이 응답을 보여주게 됨

## 프로그램 주기&이벤트 루프 
* Node.j는 non-blocking 방식으로 실행
* 따라서 JavaScript 스레드는 항상 새 이벤트나 새로 들어오는 요청 등을 다룰 수 있음
* 이벤트 루프는 계속해서 새로운 이벤트를 기다리다가 이벤트가 발생하면 운영체제가 어떠한 조치를 취할 수 있도록 한 다음 스레드를 비움 

## Requests&Response
* Stream&Buffer 
    * chunks로 도착하는 요청데이터를 분석하는데 사용
* double response 보내는 일 없도록 주의하기