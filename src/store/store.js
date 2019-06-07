import { createStore, combineReducers, applyMiddleware} from 'redux'
import moviesReducer from '../reducer/moviesreducer'
import thunk from 'redux-thunk'

const configStore = () =>
{
    const store = createStore((combineReducers({
                movies: moviesReducer
    })), applyMiddleware(thunk))
    return store 
}

export default configStore