import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.css'


export function TodoList(props) {
    
    
    return(
        <div className="letterColor">
            {props.todo.map(task => {
                return <Todo task={task} key={task.id} handleDelete={props.handleDelete}/>
            })}
        </div>
    )
}