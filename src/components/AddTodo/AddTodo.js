import React from 'react';
import './AddTodo.css'


export function AddTodo(props) {
    
    
    return(
        
        <div className="container search">
           <input className="radio" type="radio" name="radio" />
           <input className="field" type="text" size="35" value={props.todoText} onChange={props.addTodoText} onKeyUp={props.enterWatch} />
        </div>

    )
}