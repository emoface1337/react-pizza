import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    menuReducer,
    cartReducer
})

export default rootReducer