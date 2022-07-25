## body-parser 
- 데이터를 쉽게 처리할 수  있도록 도와주는 라이브러리 
- post로 정보를 전송할 때 body로 받을 수 있게 도와준다 
 

# JSON
- javascript Object Notation 
- 서버와 클라이언트 간의 교류를 할 때 많이 사용되는 데이터 형식
```js
{
    "employees": [
        {
            name : 'Surim',
            lastName : 'Son'
        },
        {
            name : 'Someone',
            lastName : 'Huh'
            // 키 내용은 그냥 쓰기
            // 값 내용은 문자만 '' 안에 넣기
        }
    ]
}
```

# form
- 입력된 데이터를 한 번에 서버를 전송하기 위해 사용
- 속성 
    * action -> 어느 경로로 데이터를 보낼 지 결정해줌
        ```html
        <form action="/receive"></form>
        <!-- receive라는 경로에서 데이터를 받겠다는 의미 -->
        ```
        ```js
        app.get('/receive', function(req,res) {
            console.log('receive')
            // poth/receive로 들어갔을때 receive 출력 됨
            res.render('index');
        });
        ```
    * name -> 이름 정하는 건데, form에는 거의 이름을 안정함(여러개 있다면 식별 위하여)
    * target -> 새창 열지, 지금 창에서 할지 정해줌
    * method -> get, post 정해줌
        - URL 치고 들어가면 자동으로 get으로 받아줌
        - 하지만 새로고침은 매번 get으로 받는 것은 아님 
        ```html
        <form action="/receive" method="POST">
            <button>전송</button>
            <!-- 전송 눌러주면 post로 받아줌  -->
        </form>
        ```
        ```js
        app.post('/receive', function(req,res) {
            console.log('receive-post')
            // 전송 눌러주면 receive-post 출력됨 
            res.render('index');
        });
        ```
        * app.get으로 데이터 보내주기
        ```js
        ```
        * app.post으로 데이터 보내주기
        ```js 
        ```
- 구성요소 : input, select, textarea, button 등등 
