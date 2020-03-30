import React, {useState} from "react"
import "./sass/App.sass"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Popup from "./components/Popup/Popup";

import db from "./db"

const App = () => {
    const [isPopupVisible, setPopupVisible] = useState(false)
    const [currentPizza, setCurrentPizza] = useState(db.pizzas[0])

    const popupOpen = (pizzaId) => {
        setCurrentPizza(db.pizzas.find(pizza => pizza.id === pizzaId))
        setPopupVisible(true)
    }

    const popupClose = () => setPopupVisible(false)

    return (
        <div className={"pizza-app"}>
            <Header/>
            <Menu
                pizzas={db.pizzas}
                popupOpen={popupOpen}
            />
            {
                isPopupVisible ?
                    <Popup
                        pizza={currentPizza}
                        popupClose={popupClose}
                    /> : null
            }
        </div>
    )
}

export default App
