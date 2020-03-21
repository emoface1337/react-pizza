import React from "react"
import Product from "./Product/Product";

const Menu = ({products}) => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    {products.map((item, index) => (
                        <div key={index} className="col-md-3">
                            <Product item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu