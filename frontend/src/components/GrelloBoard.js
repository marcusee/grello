import React , {useReducer, createContext} from 'react'
import GrelloLayer from './GrelloLayer'
import GrelloCard from './grelloCard'

import {boardReducer , initBoardState} from '../state/boardReducer'
import './Grello.css'

export const BoardContext = createContext();

function GrelloBoard() {
    const [boardState, dispatchBoard] = useReducer(boardReducer, initBoardState());

    return (
        <div>
            <BoardContext.Provider value={{ boardState, dispatchBoard }}>
                <h1>I am a Grello board</h1>
                <div className = "grelloLayerContainer">
                    {boardState?.layers.map((layer) => (
                        <GrelloLayer id={layer.id} title={layer.title}  />
                    ))}
                </div>
            </BoardContext.Provider>
 
        </div>
    )
}

export default GrelloBoard
