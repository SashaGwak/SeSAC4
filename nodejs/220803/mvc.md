# MVC
* Model View controller
* 소프트웨어 설계와 관련된 디자인 패턴 
* MVC 이용 웹 프레임워크 -> PHP, Django, Express, Angular 등등 
* 장점
    * 패턴들을 구분해 개발한다 
    * 유지보수가 용이하다 
    * 유연성이 높다 
    * 확장성이 높다 
    * 협업에 용이하다 
    * 코드의 가독성 높아진다 
* 단점 
    * 완벽한 의존성 분리가 어렵다
    * 설계 단계가 복잡하다 
    * 설계시간이 오래 걸린다 
    * 클래스가 많아진다
### MVC 흐름 
![image](https://user-images.githubusercontent.com/92668655/182850607-2ba3d4ec-73dd-45f7-bcec-8284cdaa6d41.png)
### Controller 
view와 Model을 연결해주는 부분 
### Veiw 
UI 관련된 것을 처리하는 부분(사용자에게 보여지는 부분)
### Model 
데이터베이스와 연결되어 데이터를 처리하는 부분

# 폴더구조 
![image](https://user-images.githubusercontent.com/92668655/182851243-824b23c6-231c-4426-93b8-580fa4d760a6.png)

## index.js
```js
const router = require('./routes');
app.use('/', router);

app.use('/user', router);
// 여기서는 /user/router내 경로 지정되는 것 ! 
```
- Router를 불러오는 부분 
- 위의 코드를 이용해 특정 시작 url의 역할을 나눌 수 있음

## routes/index.js 
```js
const express = require('express');
const router = express.Router()
// router로 사용할 것을 알림
const user = require('../controller/UserController');
// controller 연결, controller 내의 여러 객체 쓸 수 있도록 user로 가져옴 

router.get('/login', user.get_login);
// index에서 지정해준 경로/login 루트에서 UserController파일에 있는 get_login객체 사용

module.exports = router;
// 외부에서 읽을 수 있도록 함
```

## controller
- 경로와 연결될 함수 내용을 정의한다 
- 경로와 연결되는 함수이기에 request 객체와 response 객체를 사용
```js
const User = require('../model/User');
// model의 정보 불러오기

exports.get_login = (req,res) => {
    var data = await User.get_user();
    // model의 get_user 시행
    res.render('register');
}
// 함수를 정의할 때부터 얘는 내보낼 애라고 지정해주는 것 
```

## model/User.js
```js 
exports.get_user = async function() {
    var buffer = await fs.readFile('./info.txt');
    return buffer.toString();
}
```