import axios from "axios"
import {FETCH_MENU_ERROR, FETCH_MENU_PENDING, FETCH_MENU_SUCCESS} from "../constants"

export const getMenuData = () =>
    async dispatch => {
        dispatch({type: FETCH_MENU_PENDING})
        await axios.get('http://localhost:3001/categories?_embed=products')
            .then(response => dispatch({type: FETCH_MENU_SUCCESS, data: response.data }))
            .catch(error => {
                dispatch({type: FETCH_MENU_ERROR, error})
            })
    }

