let valuesinitial = {}

const moviesReducer = ( state = valuesinitial, action ) => {
    switch(action.type)
    {   
        case 'LOAD_MOVIES' :
        return { ...state,...action.payload}
        case 'SEARCH_KEY_WORD_MOVIES' :
        return { ...state,...action.payload}
        case 'FILTER_MOVIES' :
        return { ...state,...action.payload}
        default:
        return { ...state}
    }
}

export default moviesReducer