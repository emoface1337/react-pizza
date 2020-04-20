import React from "react"
import './Toppings.sass'
import Topping from "./Topping"

const Toppings = ({toppings, onToppingClick}) => {
    return (
        <div className="pizza-toppings">
            <div className="pizza-toppings__title">Добавить в пиццу</div>
            <div className="container">
                <div className="row">
                    {
                        toppings.map((topping, index) => {
                            return (
                                <Topping
                                    key={index}
                                    topping={topping}
                                    onToppingClick={onToppingClick}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Toppings