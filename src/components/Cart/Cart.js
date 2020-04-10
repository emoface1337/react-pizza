import React from 'react'
import {useHistory} from 'react-router-dom'
import './Cart.sass'
import CartItem from "./CartItem/CartItem";

const Cart = ({cartItems, removeItem, decrementCount, incrementCount}) => {
    // console.log(cartItems)

    let history = useHistory()
    const handleGoHomeButtonClick = () => {
        history.push('/')
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className="cart">
                            <h1 className="cart__title">Корзина</h1>
                            <div className="cart-list">
                                {
                                    cartItems.length > 0 ?
                                        cartItems.map((item, index) => (
                                            <CartItem
                                                key={index}
                                                item={item}
                                                removeItem={removeItem}
                                                decrementCount={decrementCount}
                                                incrementCount={incrementCount}
                                            />
                                        ))
                                        : <span>Добавьте что-то в корзину из меню</span>
                                }
                            </div>
                            <div className="cart__sum">
                                <span className="sum__text">Сумма заказа: </span><span
                                className="sum__value">{cartItems.length > 0 ? `${cartItems.reduce((sum, item) => sum + item.cartPrice, 0)} ₽` : '0 ₽'}</span>
                            </div>
                            <div className="cart-footer d-flex justify-content-between">
                                <button className="button-main footer__home-button" type="button"
                                        onClick={handleGoHomeButtonClick}>
                                    Вернутся в меню
                                </button>
                                <button className="button-main footer__order-button" type="button">
                                    Заказать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart