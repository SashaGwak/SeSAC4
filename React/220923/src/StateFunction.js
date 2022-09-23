import React, {useState} from 'react';

function StateFunction() {
    const [msg, setMsg] = useState('');
    const [list, setList] = useState([]); 
    // this.state {
    //     msg: ''
    // } 와 같은 의미 

    function changeMsg() {
        setMsg('메세지')
        setList([])
        // setState({msg:'메세지']})
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;