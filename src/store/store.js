const initState = {
    count: 0
}

const rootReducer = (state = initState, action) =>{

    switch(action.type){
        case 'INC':
        return{
            count: state.count + 1
        }
        case 'DEC':
        return{
            count: state.count - 1
        }
        case 'POW':
        return{
            count: Math.pow(state.count, 2)
        }
        case 'RES':
        return{
            count: 0
        }
        default:
        return state;
    }
}

