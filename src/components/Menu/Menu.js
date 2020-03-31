import React from "react"
import './Menu.sass'
import Product from "./Product/Product";

const Menu = ({pizzas, popupOpen}) => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    {
                        pizzas.map(pizza => (
                            <Product
                                key={pizza.id}
                                product={pizza}
                                popupOpen={popupOpen}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu