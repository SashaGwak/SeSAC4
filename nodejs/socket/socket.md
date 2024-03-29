# 소켓(Socket)
* 프로세스가 네트워크로 데이터를 내보내거나 데이터를 받기 위한 실제적인 창구 역할을 하는 것 
* 서버와 클라이언트를 연결해주는 도구로써 인터페이스 역할을 하는 것 
    * 서버 : 클라이언트 소켓의 연결 요청을 대기하고, 연결요청이 오면 클라이언트 소켓을 생성해 통신을 가능하게 하는 것 
    * 클라이언트 : 실제로 데이터 송수신이 일어나는 곳 
* 소켓은 프로토콜, IP 주소, 포트 넘버로 정의된다

* 소켓 흐름
<img width="581" alt="image" src="https://user-images.githubusercontent.com/92668655/188787039-1d46ee62-aeee-47d9-9893-60a46d5af802.png">
    * 서버(Server)
        * socket() : Socket 생성 함수 
        * bind() : ip와 port 번호 설정 함수
        * listen() : 클라이언트 요청에 수신 대기열을 만드는 함수 
        * accept() : 클라이언트와의 연결을 기다리는 함수(클라이언트에서 요청 올때까지 기다림)
    * 클라이언트(Client)
        * socket() : 소켓을 여는 함수 
        * connect() : 통신할 서버의 설정된 ip와 port 번호에 통신을 시도하는 함수 
        * 통신 시도 시, 서버가 accept() 함수를 이용해 클라이언트의 socket descriptor를 반환
        * 이를 통해 클라이언트와 서버가 서로 read() write()를 반복하며 통신


## WebSocet 
* 양방향 소통을 위한 프로토콜 
    * HTML5 웹 표준 기술 
    * 빠르게 작동하며 통신할 때 아주 적은 데이터를 이용
    * 이벤트를 단순히 듣고, 보내는 것만 가능 

* Socket.io 
    * 양방향 통신을 하기 위해 웹 소켓 기술을 활용하는 라이브러리 
    * 웹소켓을 기반으로 실시간 웹 애플리케이션을 위한 js 라이브러리
    * 표준 기술이 아닌 라이브러리 
    * 방개념을 이용해 일부 클라이언트에게만 데이터를 전송하는 브로드캐스팅이 가능
    * 특징 
        * 이벤트 기반 
        * 서버 소켓과 클라이언트 소켓을 연결해 실시간 양방향 통신을 도와준다 