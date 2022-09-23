import React, {Component} from 'react'; 

class EventEdu2 extends Component{
    // 안되는 거
    printConsole() {
        console.log('printConsole');
        console.log(this); 
        // 연결끊어져서 디스 안나옴
    }

    // 되는거
    printConsole2 = () => {
        console.log('printConsole');
        console.log(this);
    }

    printConsole3 = (msg) => {
        console.log('printConsole');
        console.log(msg);
        console.log(this);
    }
    

    render() {
        return (
            <div>
                <button onClick={this.printConsole}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
                <button onClick={() => {this.printConsole3('2')}}>파라미터</button>
                {/* 클래스형 컴포넌트에서는 그냥 printConsole쓰면 안되고 꼭 this붙여줘야 여기 함수를 찾을 수 있음  */}
            </div>
        )
    }
}

export default EventEdu2;