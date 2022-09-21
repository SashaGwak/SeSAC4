import React from 'react';
import './App.css'

function PropsPractice(props) {
    return (
        <> 
        <div>
            음식이름 : <span style={{color: 'red'}}>{props.food}</span> 
        </div>
        </>
    )
}

PropsPractice.defaultProps = {
    food : '기본 음식'
}

export default PropsPractice;