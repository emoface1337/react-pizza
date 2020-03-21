import React from "react";
import './Product.sass'

const Product = ({item}) => {
    return (
        <div className="product">
            <div className="product__image">
                <img src={item.imageMain} alt="Аррива!"/></div>
            <div className="product__title">{item.name}</div>
            <div className="product__description">{item.description}
            </div>
            <div className="product__cart d-flex flex-row align-items-center justify-content-between">
                <div className="product__cart-price">{item.price}</div>
                <div className="product__cart-add">
                    <button>Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default Product