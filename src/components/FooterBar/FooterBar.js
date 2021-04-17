import React from 'react';
import './FooterBar.css'



export function FooterBar(props) {
    
    
    return(
        
        <div className="container footerBar">  
           <p>{props.numberOfTodo} Items Left</p>
           <ul className="container filters">
                <li>All</li>
                <li>Active</li>
                <li>completed</li>
           </ul>
           <p>Clear Completed</p>
        </div>

    )
}