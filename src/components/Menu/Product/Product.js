import React from "react";
import './Product.sass'

const Product = ({product}) => {
    return (
        <div key={product.id} className="col-md-3">
            <div className="product">
                <div className="product__image">
                    <img src={product.imageMain} alt={product.name}/>
                </div>
                <div className="product__title">{product.name}</div>
                <div className="product__description">{product.description}
                </div>
                <div className="product__cart d-flex flex-row align-items-center justify-content-between">
                    <div className="product__cart-price">{product.price}</div>
                    <div className="product__cart-add">
                        <button>Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product