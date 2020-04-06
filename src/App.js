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

    const addToCart = (product, removedIngredients, addedToppings, cartPrice) => {
        setPopupVisible(false)
        let newItem = {}

        if (cartItems.length > 0) {
            newItem = cartItems.find(item => item.id === product.id
                && JSON.stringify(item.removedIngredients) === JSON.stringify(removedIngredients)
                && JSON.stringify(item.addedToppings) === JSON.stringify(addedToppings))

            if (newItem !== undefined) {
                cartItems.map(item => {
                    if (JSON.stringify(item) === JSON.stringify(newItem)) {
                        let newItem = Object.assign({}, item);
                        newItem.count = item.count++
                        newItem.cartPrice += cartPrice
                        return newItem
                    } else {
                        return item
                    }
                })
            } else {
                newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
                setCartItems([...cartItems, newItem])
            }
        }

        if (cartItems.length === 0) {
            newItem = {...product, count: 1, removedIngredients, addedToppings, cartPrice}
            setCartItems([...cartItems, newItem])
        }
        setCartCount(cartCount + 1)
    }

    const removeItem = (item) => {
        const newItems = cartItems.filter(cartItem =>
            cartItem !== item
        )
        setCartItems(newItems)
        setCartCount(cartCount - item.count)
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
        setCartCount(cartCount - 1)
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
        setCartCount(cartCount + 1)
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
                       component={() => <Menu categories={categories} popupOpen={popupOpen} addToCart={addToCart}/>}/>
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
