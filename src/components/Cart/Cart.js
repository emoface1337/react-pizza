import React from 'react'
import './Cart.sass'
import CartItem from "./CartItem/CartItem";

const Cart = ({cartItems, removeItem}) => {
    console.log(cartItems)
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
                                        cartItems.map((item,index) => (
                                            <CartItem
                                                key={index}
                                                item={item}
                                                removeItem={removeItem}
                                            />
                                        ))
                                        : "Добавьте что-то в корзину из меню"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart