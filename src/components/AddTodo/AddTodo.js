import React from 'react';
import './AddTodo.css'
import check from '../../images/icon-check.svg';


export function AddTodo(props) {
    
    
    return(
        
        <div className="container search">
           <input className="field" type="text" size="35" value={props.todoText} onChange={props.addTodoText} onKeyUp={props.enterWatch} />
        </div>

    )
}