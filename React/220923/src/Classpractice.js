import React, {Component} from "react";

class Classpractice extends Component {
    state = {
        cnt: 0, 
    };
    render(){
        return(
            <div>
            <div> 숫자 : {this.state.cnt}</div>
            <button onClick={()=>{
                this.setState( prevState => {
                    return {cnt: prevState.cnt + 2 }
                    }); 
                    }}>+2</button>
            <button onClick={()=>{
                this.setState(prevState => {
                    return {cnt: prevState.cnt - 1}
                }); }}>-1</button>
            </div>
        )
    }
}

export default Classpractice;