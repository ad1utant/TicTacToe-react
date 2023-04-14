import React from 'react';
import Button from "./button.jsx";

function Board() {
    const list = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    return (
        <div>
            {list.map(el =>(
            <button key ={el} className={'button'}>o/x</button>
            ))}
        </div>
    );
}

export default Board;