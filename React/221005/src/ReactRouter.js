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