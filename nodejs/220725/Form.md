## body-parser 
- 데이터를 쉽게 처리할 수 있도록 도와주는 라이브러리 
- post로 정보를 전송할 때 body로 받을 수 있게 도와준다 
 
## multer 
- 파일 업로드를 위해 필요한 모듈, 사용자 파일 업로드 기능 제공
- npm 설치후 모듈 불러오기 필요
## JSON
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
            'name' : 'Someone',
            'lastName' : 'Huh'
            // 키 내용은 모두 ''안에 넣기 
            // 값 내용은 문자만 '' 안에 넣기(숫자 제외)
        }
    ]
}
```

## form
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
            // views 파일 내 index.ejs 파일 렌더링
        });
        ```
    * name -> 이름 정하는 건데, form에는 거의 이름을 안정함(여러개 있다면 식별 위하여 정해주기도 함)
    * target -> 새창 열지, 지금 창에서 할지 정해줌
    * method -> get, post 정해줌
        - URL 치고 들어가면 자동으로 get으로 받아줌
        - 하지만 새로고침은 매번 get으로 받는 것은 아님 
        ```html
        <form action="/receive" method="POST">
            <button>전송</button>
            <!-- 전송 눌러주면 post로 받아줌  -->
            <!-- type='submit'가 디폴트 -> type='button'으로 변경하면 form 내용 자동 전송되지 않음 유의  -->
        </form>
        ```
        ```js
        app.post('/receive', function(req,res) {
            console.log('receive-post')
            // 전송 눌러주면 receive-post 출력됨 
            res.render('index');
        });
        ```
        * get, post 방식 데이터 뱓을시 유의점 
            - get 방식은 req.query로 받음
            - post 방식은 req.body로 받음
            - 따라서 불러오는 방식에 유의하기~! 

- 구성요소 : 
    * input
        * 속성 : type, name, readonly(수정불가), Maxlength, required(form 전송시 필수태그로 지정), autofocus, placeholder(입력전 써져있는 내용)
        * type : text, radio(택일), checkbox(중복선택 및 취소 가능), color, time, date 등 
    * select 
        * dropdown을 통한 선택창, 서버가 지정한 특정 값만을 선택할 수 있는 요소
        * 기본 형식 
            ```html
            <select name='sports'>
                <option value="야구">야구</option>
                <option value="축구">축구</option>
                <option value="농구">농구</option>
                <!-- 단 value 값을 무조건 써줘야 값 인식 가능, value가 없다면 on/off로만 인식 가능  -->
            </select>
            ```
    * laberl 
        * 폼 양식에 이름을 붙일 수 있다
        * for 속성에 연결할 요소의 id를 적어 label을 클릭해도 해당요소로 가게 만들수 있다(글씨만 클릭해도 클릭가능한 것)
    * fieldset
        * 폼 태그 안에 있는 요소들을 그룹화 할때 사용 
    * legend
        * filedset 안에 들어가는 태그로 그룹화된 목적에 맞게 이름을 지정해줄수 있다 
    * textarea, button 등 
