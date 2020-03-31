import React, {useState} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"

import "./sass/App.sass"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Popup from "./components/Popup/Popup";

import db from "./db"
import Cart from "./components/Cart/Cart";

const App = () => {
    const [isPopupVisible, setPopupVisible] = useState(false)
    const [currentPizza, setCurrentPizza] = useState(db.pizzas[0])

    const popupOpen = (pizzaId) => {
        setCurrentPizza(db.pizzas.find(pizza => pizza.id === pizzaId))
        setPopupVisible(true)
    }

    const popupClose = () => setPopupVisible(false)

    return (
        <Router>
            <div className={"pizza-app"}>
                <Header/>
                <Route exact path="/" component={() => <Menu pizzas={db.pizzas} popupOpen={popupOpen}/>}/>
                <Route exact path="/cart" component={() => <Cart/>}/>
                {
                    isPopupVisible ?
                        <Popup
                            pizza={currentPizza}
                            popupClose={popupClose}
                        /> : null
                }
            </div>
        </Router>
    )
}

export default App
