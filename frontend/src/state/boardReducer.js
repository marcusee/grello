


export let initBoardState = () => { return {
        layers:[
            {
                title : "",
                cards : []
            }
        ]
    } 
}


export function boardReducer (state = initBoardState() , { type, payload }) {
    switch(type) {
        case 'addCard':
            console.log(payload);
            return {...state}
        default:
            return initBoardState();
    }


    const moveCard = () => {

    }

    const addCard = (payload) => {
        
    }

}