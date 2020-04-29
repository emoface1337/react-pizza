import {FETCH_MENU_SUCCESS, FETCH_MENU_PENDING, FETCH_MENU_ERROR} from '../constants'

const initialState = {
    error: null,
    isLoading: false,
    products: []
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_SUCCESS:
            return {
                products: [...state.products, ...action.data],
                isLoading: false
            }

        case FETCH_MENU_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_MENU_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default menuReducer