import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMenuData} from './store/actions/menuActions'

import './sass/App.sass'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Popup from './components/Popup/Popup'
import Cart from './components/Cart/Cart'

const App = ({getMenuData, categories, isLoading, error, cartItems, cartCount}) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        getMenuData()
    }, [getMenuData])

    const isFetchPending = () => {
        return isLoading !== false
    }

    const popupOpen = (productId) => {
        let newCurrentProduct = {}
        categories.map(category => {
            if (category.id !== 1)
                return category
            else
                newCurrentProduct = category.products.find(product => product.id === productId)
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
                       component={() => !isFetchPending() ? <Menu categories={categories} popupOpen={popupOpen} cartItems={cartItems}/> : <h1 style={{textAlign: "center"}}>Загрузка...</h1>}/>

                <Route exact path="/cart"
                       component={() => <Cart cartItems={cartItems}/>}/>
                {
                    isPopupVisible ?
                        <Popup
                            product={currentProduct}
                            popupClose={popupClose}
                        /> : null
                }
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.menuReducer.products,
        isLoading: state.menuReducer.isLoading,
        error: state.menuReducer.error,
        cartItems: state.cartReducer.cartItems,
        cartCount: state.cartReducer.cartCount
    }
}
export default connect(mapStateToProps, {getMenuData})(App)
