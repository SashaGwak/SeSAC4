## URL 파라미터 사용방법

### product.js
```js
import {useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
  // params쓰는 방법
  const { id } = useParams();
  // 만약 받아온 변수 이름 바꾸고 싶은 경우 아래와 같이 사용
  // const id2 = useParams().id;

  // 쿼리스트링 사용방법 1
  const location = useLocation();
  // 쿼리스트링 사용방법 2
  const [searchParams, setSearchParams] = useSearchParams();

  // 네비게이트는 함수로써 사용 가능
  const navigate = useNavigate();
    return (
      <div>
        {/* useParams 사용 */}
        <h1>{id}번 Product</h1>

        {/* useLocation 사용  */}
        <ul>
          {/* URL http://localhost:3000/product/2?search=productName&q=demo#test 일때  */}
          <li>hash : {location.hash}</li>           {/* 출력 -> #test */}
          <li>pathname : {location.pathname}</li>   {/* 출력 -> /product/2 */}
          <li>search : {location.search}</li>       {/* 출력 -> ?search=productName&q=demo */}
          <li>state : {location.state}</li>         {/* 출력 ->  */}
          <li>key : {location.key}</li>             {/* 출력 -> ya89i5sq */}
        </ul> 

        {/* useSearchParams 사용 */}
        <ul>
          <li>keyWords : {searchParams}</li>
          {/* searchParams에는 쿼리스트링 데이터 다 나옴 */}
          <li>keyWord : {searchParams.get("search")}</li>
          <li>keyWord2 : {searchParams.get("q")}</li>
          {/* 그 데이터에서 get으로 정보를 뽑아낼수있음 여기서 search키값을 사용하여 value뽑아내는 것 */}
        </ul>

        {/* useNavigate 사용 */}
        <ul>
          <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
          <li><button onClick={() => navigate(-1)}>Go back</button></li>
          <li><button onClick={() => navigate(1)}>Go forword</button></li>
          <li><button onClick={() => navigate(2)}>Go 2 pages forword</button></li>
          <li><button onClick={() => navigate('/')}>Go Root</button></li>
          <li><button onClick={() => navigate('/', {state: 'aa'})}>Go Root2 with state</button></li>
        </ul>
      </div>
    );
    // hash -> #뒤에 적었던 값
    // pathname -> path 경로
    // search -> ?포함 쿼리스트링 값
    // state -> url에 포함되지 않으면서 값을 보내줄 수 있는 것(navigate로 보내줄 수 있음)
    // key -> 내 페이지의 고유값(location의 키)
}

export default Product;
```

### main.js
```js
import { Link, useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  return (
    <div>
      <h1>Main state = {location.state}</h1>
      
      <Link to='/product/1'>1번 상품</Link>
      <br />
      <Link to='/product/2'>2번 상품</Link>
      <br />
      <Link to='/product/2?search=productName&q=demo#test'>2번 상품 상세</Link>
    </div>
  );
}

export default Main;
```

### ReactRouter.js
```js 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Product from "./Product";
const ReactRouter = () => {
    return (
        <div>
            {/* BrowserRouter의 안의 내용이 바뀌게 되는 것  -> url에 따라 바꾸고 싶은 부분의 최상단에 적어주면 됨*/}
            <BrowserRouter>
                <h1>여기는 ReactRouter</h1>
                <Link to='/'>메인 페이지</Link>
                {/* Routes는 경로를 묶어주는 친구 */}
                <Routes>
                    {/* Routes안에서는 하나의 뷰만 보여지는 거?  */}
                    <Route path="/" element={<Main/>}></Route>
                    {/* /product로 이동하게 하는 Route처리  */}
                    {/* <Route path="/product" element={<Product/>}></Route> */}

                    <Route path="/product/:id" element={<Product/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default ReactRouter;
```

