import React , {useReducer, useState} from 'react'
import GrelloLayer from './GrelloLayer'
import GrelloCard from './grelloCard'

import { useSelector, useDispatch } from 'react-redux';
import {selectBoardState} from '../components/boardReducer'

function GrelloBoard() {
    const boardState = useSelector(selectBoardState)

    // const boardState = useState({layers : [
    //     {
    //         id : "1",
    //         title : "a"
    //     }
    // ]})
    return (
        <div> 
            <h1>I am a Grello board</h1> 
            <div className = "grelloLayerContainer">
                {boardState?.layers.map ((layer) => ( <GrelloLayer id={layer.id} title={layer.title}  />))}
                {/* {boardState ?? boardState[0]?.layers.map((layer) => ( <GrelloLayer id={layer.id} title={layer.title}  />))} */}
            </div>
        </div>
    )
}

export default GrelloBoard
