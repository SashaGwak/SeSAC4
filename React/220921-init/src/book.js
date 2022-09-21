import React from 'react';
import './App.css'

function Books(props) {
    return (
        <> 
            <div className='books'>
                <h1>이번주 베스트셀러</h1>
                <img src='img/bookimage.png' alt='베스트셀러' style={{width: '200px'}}/>
                <h3>{props.content}</h3>
                <p>저자 : {props.name}</p>
                <p>판매가 : {props.price}</p>
                <p>구분 : {props.type}</p>
            </div>
        </>
    )
}

export default Books;