import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "./Student";
import './Practice.css';

const ReactPractice = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <div className="ReactPractice">
                    <h1>ReactRouter 실습</h1>
                    <p className="Link"><Link to='/student/Sesac'>학생 SeSAC</Link></p>
                    <p className="Link"><Link to='/student/codingon'>코딩온</Link></p>
                    <p className="Link"><Link to='/student/new?name=sesac&key=id#codingson'>searchParams</Link></p>
                </div>
                <Routes>
                    <Route path="/student/:name" element={<Student/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default ReactPractice;