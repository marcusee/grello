import React from 'react'
import GrelloLayer from './GrelloLayer'
import GrelloCard from './grelloCard'
import './Grello.css'

function GrelloBoard() {
    return (
        <div>
            <h1>I am a Grello board</h1>
            <div className = "grelloLayerContainer">
                <GrelloLayer title="first" />
                <GrelloLayer title="second"/>
                <GrelloLayer title="third"/>
            </div>
        </div>
    )
}

export default GrelloBoard
