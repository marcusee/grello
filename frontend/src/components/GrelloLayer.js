import React from 'react'
import GrelloCard from './grelloCard'
import './Grello.css'

function GrelloLayer({title}) {
    return (
        <div className = "grelloLayer">
            <h3>{title}</h3>
            <GrelloCard />
            <GrelloCard />
            <GrelloCard />
        </div>
    )
}

export default GrelloLayer
