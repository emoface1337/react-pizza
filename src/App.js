import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import axios from 'axios'

import "./sass/App.sass"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Popup from "./components/Popup/Popup";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [categories, setCategories] = useState(null)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/categories?_embed=products')
            .then(({data}) => {
                setCategories(data)
            })
    }, [])

    const stringPriceToNumberPrice = (stringPrice) => Number(stringPrice.match(/\d/g).join(''))

    const addToCart = (product, removedIngredients, addedToppings, cartPrice) => {
        setPopupVisible(false)
        let newItem = {}
        let newItems = []

        if (cartItems.length > 0) {
            newItem = cartItems.find(item => item.id === product.id
                && JSON.stringify(item.removedIngredients) === JSON.stringify(removedIngredients)
                && JSON.stringify(item.addedToppings) === JSON.stringify(addedToppings))

            if (newItem !== undefined) {
                newItems = cartItems.map(item => {
                    if (JSON.stringify(item) === JSON.stringify(newItem)) {
                        let newItem = Object.assign({}, item);
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
                setCartItems([...newItems])
            } else {
                if (product.categoryId === 1)
                    newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
                else
                    newItem = {
                        ...product,
                        count: 1,
                        removedIngredients,
                        addedToppings,
                        cartPrice: stringPriceToNumberPrice(product.price)
                    }
                setCartItems([...cartItems, newItem])
            }
        }

        if (cartItems.length === 0) {
            if (product.categoryId === 1)
                newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
            else
                newItem = {
                    ...product,
                    count: 1,
                    removedIngredients,
                    addedToppings,
                    cartPrice: stringPriceToNumberPrice(product.price)
                }
            setCartItems([newItem])
        }
        setCartCount((c) => c + 1)
    }

    const removeItem = (item) => {
        const newItems = cartItems.filter(cartItem => cartItem.id !== item.id)

        let count = 0
        if (item.count !== undefined)
            count = item.count
        else
            count = 1
        setCartItems(newItems)
        setCartCount((c) => c - count)
    }

    const decrementCount = (product) => {
        const newItems = cartItems.map(item => {
            if (JSON.stringify(item) === JSON.stringify(product)) {
                item.cartPrice -= item.cartPrice / item.count
                item.count--
            }
            return item
        })
        setCartItems(newItems.filter(item => item.count !== 0))
        setCartCount((c) => c - 1)
    }

    const incrementCount = (product) => {
        const newItems = cartItems.map(item => {
            if (JSON.stringify(item) === JSON.stringify(product)) {
                item.cartPrice += item.cartPrice / item.count
                item.count++
            }
            return item
        })
        setCartItems(newItems)
        setCartCount((c) => c + 1)
    }

    const popupOpen = (productId) => {
        let newCurrentProduct = {}
        categories.map(category => {
            category.products.map(product => {
                if (productId === product.id)
                    newCurrentProduct = product
                return product
            })
            return category
        })
        setCurrentProduct(newCurrentProduct)
        setPopupVisible(true)
    }

    const popupClose = () => setPopupVisible(false)

    return (
        <Router>
            <div className={"pizza-app"}>
                <Header cartCount={cartCount}/>
                <Route exact path="/"
                       component={() => <Menu categories={categories} popupOpen={popupOpen}
                                              addToCart={addToCart} cartItems={cartItems} removeItem={removeItem}/>}/>
                <Route exact path="/cart"
                       component={() => <Cart cartItems={cartItems} removeItem={removeItem}
                                              decrementCount={decrementCount} incrementCount={incrementCount}/>}/>
                {
                    isPopupVisible ?
                        <Popup
                            product={currentProduct}
                            addToCart={addToCart}
                            popupClose={popupClose}
                        /> : null
                }
            </div>
        </Router>
    )
}

export default App
