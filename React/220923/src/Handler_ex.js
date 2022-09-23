import React, {Component} from 'react'; 

class Handler_ex extends Component{
    state = {
        message: "Hello World!"
    }

    msgChange = (e) => {
        this.setState({
            message: "Goodbye World!"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.msgChange}>클릭</button>
                <br />
                <br />
            </div>
        )
    }
}

export default Handler_ex;