import {GET_MENU_DATA} from '../constants'

const menuReducer = (state = [], action) => {
    if (action.type === GET_MENU_DATA) {
        return [...state, ...action.data]
    } else {
        return state
    }
}

export default menuReducer