let valuesinitial = []

const moviesReducer = ( state = valuesinitial, action ) => {
    switch(action.type)
    {   
        case 'LOAD_MOVIES' :
        return [ ...valuesinitial,...action.payload]
        case 'FILTER_MOVIES' :
        return [ ...valuesinitial,...action.payload]
        default:
        return [ ...state]
    }
}

export default moviesReducer