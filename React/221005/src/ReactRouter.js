import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ReactRouter = () => {
    return (
        <div>
            {/* BrowserRouter의 안의 내용이 바뀌게 되는 것  -> url에 따라 바꾸고 싶은 부분의 최상단에 적어주면 됨*/}
            <BrowserRouter>
                {/* Routes는 경로를 묶어주는 친구 */}
                <Routes>
                    
                </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;