import React, {Component} from "react";
class StateClass extends Component {
    // constructor(props){
    //     super(props); // 부모 있는 함수 쓰고 싶으면 super.함수
    //     this.state = {
    //         name : "SeSAC",
    //         list : ["s", "e", "s", "a", "c"]
    //     };
    // }

    // 구조체를 쓰지 않고도 쓸수 있음 
    state = {
        name : "SeSAC",
        cnt: 0, 
        list : ["s", "e", "s", "a", "c"]
    };
    render(){
        return(
            <div>
            <div>{this.state.name} StateClass {this.state.cnt}</div>
            <button onClick={()=>{
                // this.setState({name:"청년취업사관학교", cnt: this.state.cnt + 1});
                // this.setState({name:"영등포캠퍼스", cnt: this.state.cnt + 1});
                this.setState(prevState => {
                    // prevState는 기존상태를 가져온 친구
                    return {cnt: prevState.cnt + 1}
                }); 
                this.setState(prevState => {
                    return {cnt: prevState.cnt + 1}
                }); 
            }}>클릭</button>
            <button onClick={()=>{this.setState({list: ["c", "l", "i"]})}}>클릭</button>
            <ul>
                {this.state.list.map((txt) => {
                return <li>{txt}</li>
                })}
            </ul>
            </div>
        )
    }
}

export default StateClass;