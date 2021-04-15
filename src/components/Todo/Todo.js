import React from 'react';
import './Todo.css';
import Cross from '../../images/icon-cross.svg';

export function Todo(props) {
    const { id, description } = props.task;
    
    
    return(
        <div className="container todo">
            <p>{description}</p><img className="deletex" src={Cross} alt="x" onClick={props.handleDelete} id={id} />
        </div>
    )
}

