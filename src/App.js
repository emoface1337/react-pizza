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

    const addToCart = (product, removedIngredients, addedToppings, currentPrice) => {
        setPopupVisible(false)
        console.log(removedIngredients)
        console.log(addedToppings)
        let newItems = []
        if (cartItems.length > 0) {
            cartItems.map(item => {
                if (item.id === product.id
                    && JSON.stringify(item.removedIngredients) === JSON.stringify(removedIngredients)
                    && JSON.stringify(item.addedToppings) === JSON.stringify(addedToppings)) {
                    console.log(item)
                    item.count++
                    item.currentPrice += currentPrice
                } else {
                    newItems = [...newItems, {
                        ...product,
                        count: 1,
                        removedIngredients,
                        addedToppings,
                        currentPrice
                    }]
                }
                return item
            })
        } else {
            newItems = [{...product, count: 1, removedIngredients, addedToppings, currentPrice}]
        }
        setCartItems([...cartItems, ...newItems])
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
                <Route exact path="/" component={() => <Menu categories={categories} popupOpen={popupOpen}/>}/>
                <Route exact path="/cart" component={() => <Cart cartItems={cartItems}/>}/>
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
