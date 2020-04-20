import {ADD_TO_CART, REMOVE_ITEM_CART, INC_CART_ITEM_COUNT, DEC_CART_ITEM_COUNT} from '../constants'

const stringPriceToNumberPrice = (stringPrice) => Number(stringPrice.match(/\d/g).join(''))

const cartReducer = (state = {cartItems: [], cartCount: 0}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            // setPopupVisible(false)
            const product = action.payload.product
            const removedIngredients = action.payload.removedIngredients
            const addedToppings = action.payload.addedToppings
            const cartPrice = action.payload.cartPrice
            const cartItems = state.cartItems

            let newItem = {}
            let newItems = []

            if (cartItems.length > 0) {
                newItem = cartItems.find(item => item.id === product.id
                    && JSON.stringify(item.removedIngredients) === JSON.stringify(removedIngredients)
                    && JSON.stringify(item.addedToppings) === JSON.stringify(addedToppings))

                if (newItem !== undefined) {
                    newItems = cartItems.map(item => {
                        if (JSON.stringify(item) === JSON.stringify(newItem)) {
                            let newItem = Object.assign({}, item)
                            newItem.count = item.count + 1
                            if (product.categoryId === 1)
                                newItem.cartPrice += cartPrice
                            else
                                newItem.cartPrice += stringPriceToNumberPrice(item.price)
                            return newItem
                        } else {
                            return item
                        }
                    })
                    return {
                        cartItems: [...newItems],
                        cartCount: state.cartCount + 1
                    }
                } else {
                    if (product.categoryId === 1)
                        newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
                    else
                        newItem = {
                            ...product,
                            count: 1,
                            cartPrice: stringPriceToNumberPrice(product.price)
                        }
                    return {
                        cartItems: [...cartItems, newItem],
                        cartCount: state.cartCount + 1
                    }
                }
            }

            if (cartItems.length === 0) {
                if (product.categoryId === 1)
                    newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
                else
                    newItem = {
                        ...product,
                        count: 1,
                        cartPrice: stringPriceToNumberPrice(product.price)
                    }
                return {
                    cartItems: [...cartItems, newItem],
                    cartCount: state.cartCount + 1
                }
            }
            break
        }

        case REMOVE_ITEM_CART: {
            let item = action.item

            if(item.categoryId !== 1) {
                item = {...item, count: 1, cartPrice: stringPriceToNumberPrice(item.price)}
            }
            const newItems = state.cartItems.filter(cartItem =>
                JSON.stringify(cartItem) !== JSON.stringify(item)
            )
            console.log(item)
            console.log(newItems)
            let count = 0
            if (item.count !== undefined)
                count = item.count
            else
                count = 1

            return {
                cartItems: [...newItems],
                cartCount: state.cartCount - count
            }
        }

        case INC_CART_ITEM_COUNT: {
            const product = action.product
            const newItems = state.cartItems.map(item => {
                if (JSON.stringify(item) === JSON.stringify(product)) {
                    item.cartPrice += item.cartPrice / item.count
                    item.count++
                }
                return item
            })
            return {
                cartItems: [...newItems],
                cartCount: state.cartCount + 1
            }
        }

        case DEC_CART_ITEM_COUNT: {
            const product = action.product
            const newItems = state.cartItems.map(item => {
                if (JSON.stringify(item) === JSON.stringify(product)) {
                    item.cartPrice -= item.cartPrice / item.count
                    item.count--
                }
                return item
            })

            return {
                cartItems: [...newItems.filter(item => item.count !== 0)],
                cartCount: state.cartCount - 1
            }
        }

        default:
            return state
    }
}

export default cartReducer