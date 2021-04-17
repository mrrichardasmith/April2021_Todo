import React from 'react';
import './Todo.css';
import Cross from '../../images/icon-cross.svg';

export function Todo(props) {
    const { id, description } = props.task;
    
    
    return(
        <div className="container todo">
            <div className="todoCheck">
                <input type="checkbox" id="completed" />
            </div>
            <div className="todoDesc">
                <p>{description}</p>
            </div>
            <div className="todoDel">
                <img className="deletex" src={Cross} alt="x" onClick={props.handleDelete} id={id} />
            </div>
        </div>
    )
}

