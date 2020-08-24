import React from 'react'
import './Grello.css'

function GrelloCard({title, description}) {
    
    
    
    return (
        <div
            draggable
            onDrag= {() => {}}
            onDragEnd = {() => console.log("DRAG END")}
            onClick={()=>{console.log('on click')}}
            className="grelloCard"
        >
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default GrelloCard