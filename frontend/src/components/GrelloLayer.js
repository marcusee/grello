import React, {useState, useContext, useEffect} from 'react'
import GrelloCard from './grelloCard'
import {BoardContext} from './GrelloBoard'
import './Grello.css'

function GrelloLayer({layerId, title}) {

    const {boardState, dispatchBoard} = useContext(BoardContext);
    const [dragCounter, setDragCounter] = useState(0);
    const [layerStyle, setLayerStyle] = useState("grelloLayer")
    const [layerState, setLayerState] = useState({});

    useEffect(()=> {
        setLayerState(boardState?.layers[layerId]);
    })

    return (
        <div
            className = {layerStyle}
            onDragOver = {(event)=> {
                event.preventDefault();
            }}
            onDragEnter = {(event) =>  {
                event.preventDefault();
                setDragCounter(1); 
                if (dragCounter === 1) {
                    setLayerStyle(layerStyle + " grelloLayerOver")
                }
                console.log('enter')

            }}
            onDragLeave = {(event) => {
                setDragCounter(0); 
                if (dragCounter === 0) {
                    setLayerStyle("grelloLayer");
                }
            }}
            onDrop = {(event) => {
                console.log("DROPPED" , event.target)
                setLayerStyle("grelloLayer");
            }}
        
        >
            <h3>{title}</h3>

            <GrelloCard title="hello" description="is a desc"/>
            {/* <GrelloCard title="hello" description="is a desc"/>
            <GrelloCard title="hello" description="is a desc"/> */}


            <button onClick = {() => {
                console.log("FIRE")
                dispatchBoard ({type:'addCard' , payload: "HI"})
            }}
            > 
                Add Card
            </button>
        </div>
    )
}

export default GrelloLayer
