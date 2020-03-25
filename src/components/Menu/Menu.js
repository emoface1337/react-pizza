import React from "react"
import Product from "./Product/Product";

const Menu = ({products}) => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    {
                        products.map(product => (
                            <Product product={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu