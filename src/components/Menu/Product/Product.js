import React from "react";
import './Product.sass'

const Product = ({product, popupOpen}) => {
    return (
        <div className="col-md-3">
            <div className="product">
                <div className="product__image" onClick={() => popupOpen(product.id)}>
                    <img src={product.imageMain} alt={product.name}/>
                </div>
                <div className="product__title">{product.name}</div>
                <div className="product__description">{product.description}
                </div>
                <div className="product__cart d-flex align-items-center justify-content-between">
                    <div className="product__cart-price">{product.price}</div>
                    <div className="product__cart-popup">
                        <button className="button-main" type="button" data-toggle="modal" data-target="#pizza-modal"
                                onClick={() => popupOpen(product.id)}>
                            Выбрать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product