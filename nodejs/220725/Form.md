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
            'name' : 'Surim',
            'lastName' : 'Son'
        },
        {
            'name': 'Someone',
            'lastName' : 'Huh'
            // 키 내용은 무조건 '' 안에 넣기 
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
    * name 
    * target
    * method
- 구성요소 : input, select, textare
