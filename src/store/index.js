import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import News from './news/reducer'
import Menu from './menu'


const store = createStore(
    combineReducers({
        News,
        Menu
    }),
    applyMiddleware(ReduxThunk)
)

export default store