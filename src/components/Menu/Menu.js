import React from "react"
import Product from "./Product/Product";

const Menu = ({pizzas, popupOpen}) => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    {
                        pizzas.map((pizza, index) => (
                            <Product
                                key={index}
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