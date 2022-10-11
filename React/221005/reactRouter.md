## Routing이란?
* 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것 
* 가장 많이 쓰이는 라이브러리? 
    * React Router 

## React Router 
* 개발자가 주소별로 다른 컴포넌트를 보여주기 위해 사용하는 라이브러리 
* 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트 제공
* 주요 컴포넌트 4개 
    * BrowerRouter
    * Routes
    * Route
    * Link


## 사용방법 
```bash
# 패키지 설치
npm install react-router-dom
```

## BrowerRouter
* HTML5를 지원하는 브라우저의 주소 감지
* Router의 역할 
* 새로고침을 하지 않아도 새로운 컴포넌트를 렌더링 해주는 역할
* URL마다 컴포넌트가 바뀔 때 이때 바뀌는 부분의 **최상단**에 위치해야 함 
```js
import { BrowserRouter } from "react-router-dom";
const ReactRouter = () => {
    return (
        <div>
            {/* BrowserRouter의 안의 내용이 바뀌게 되는 것  -> url에 따라 바꾸고 싶은 부분의 최상단에 적어주면 됨*/}
            <BrowserRouter>
            </BrowserRouter>
        </div>
    )
}
export default ReactRouter;
```

## Routes, Route
* 경로가 일치하는 컴포넌트를 렌더링해주도록 경로 매칭
* Route에서는 구체적으로 어떤 컴포넌트를 렌더링할지 결정
* path : 경로, element : 연결할 컴포넌트
```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Product from "./Product";
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <h1>여기는 ReactRouter</h1>
                {/* Routes는 경로를 묶어주는 친구 */}
                <Routes>
                    {/* Routes안에서는 하나의 뷰만 보여지는 거?  */}
                    <Route path="/" element={<Main/>}></Route>
                    {/* /product로 이동하게 하는 Route처리  */}
                    <Route path="/product" element={<Product/>}></Route> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default ReactRouter;
```

## Link
* 경로를 변경
* 기존 HTML 의 a 태그가 새로고침해 렌더링을 수행했다면 <Link> 컴포넌트는 페이지 전환을 방지
```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Product from "./Product";
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <h1>여기는 ReactRouter</h1>
                <Link to='/'>메인 페이지</Link>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/product" element={<Product/>}></Route> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default ReactRouter;
```