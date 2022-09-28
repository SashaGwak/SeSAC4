import React, {Component, createRef} from "react";
import Box from './Box.css';

class ScrollBox extends Component {
    // 스크롤 함수
    scroll = () => {
        // 요소의 가장 맨 밑으로 이동
        // this.inBox.scrollIntoView(false);
        this.inBox.scrollIntoView({behavior: "smooth", block: "end"});
        // this.inBox.scrollIntoView(true); // 가장 상단으로 이동

    }

    render() {
        return (<>
            <div className="ScrollBox" ref={(ref) => {this.mainBox = ref}}>
                <div className="inBox" ref={(ref) => {this.inBox = ref}}></div>
            </div>
            <button onClick={this.scroll}>맨아래로</button>
        </>)
    }
}


export default ScrollBox;