import {ADD_TO_CART, REMOVE_ITEM_CART, INC_CART_ITEM_COUNT, DEC_CART_ITEM_COUNT} from '../constants'

export const addToCart = (product, removedIngredients, addedToppings, cartPrice) => ({
    type: ADD_TO_CART,
    payload: {
        product,
        removedIngredients,
        addedToppings,
        cartPrice
    }
})

export const removeItem = (item) => ({type: REMOVE_ITEM_CART, item})
export const incrementCount = (product) => ({type: INC_CART_ITEM_COUNT, product})
export const decrementCount = (product) => ({type: DEC_CART_ITEM_COUNT, product})






