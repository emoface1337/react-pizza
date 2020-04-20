import React from "react"
import {connect} from 'react-redux'
import {addToCart, removeItem} from '../../../store/actions/cartActions'
import './Product.sass'

const Product = ({product, popupOpen, addToCart, cartItems, removeItem}) => {
    return (
        <div className="col-md-3">
            <div className="product">
                <div className="product__image" style={product.categoryId === 1 ? {cursor: 'pointer'} : null} onClick={
                    product.categoryId === 1 ?
                        () => popupOpen(product.id)
                        :
                        null
                }>
                    <img src={product.imageMain} alt={product.name}/>
                </div>
                <div className="product__title">{product.name}</div>
                <div className="product__description">{product.description}
                </div>
                <div className="product__cart d-flex align-items-center justify-content-between">
                    <div className="product__cart-price">{product.price}</div>
                    <div className="product__cart-popup">
                        {
                            cartItems.length > 0 && cartItems.find(item => item.id === product.id) !== undefined
                            && product.categoryId !== 1 ?
                                <button className="button-main" type="button"
                                        style={{backgroundColor: 'seagreen', color: '#ffffff'}}
                                        onClick={() => removeItem(product)}
                                >
                                    В корзине
                                </button>
                                :
                                <button className="button-main" type="button" data-toggle="modal"
                                        data-target="#pizza-modal"
                                        onClick={
                                            product.categoryId === 1 ?
                                                () => popupOpen(product.id)
                                                :
                                                () => addToCart(product)
                                        }>
                                    {product.categoryId === 1 ? `Выбрать` : `В корзину`}
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {addToCart, removeItem})(Product)