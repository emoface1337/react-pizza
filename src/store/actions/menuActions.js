import axios from "axios"
import {GET_MENU_DATA} from "../constants"

export const getMenuData = () => async dispatch => {
    const {data} = await axios.get('http://localhost:3001/categories?_embed=products')
    dispatch({type: GET_MENU_DATA, data})
}

