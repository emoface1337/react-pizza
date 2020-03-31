import React from 'react'
import './Cart.sass'

const Cart = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className="cart">
                            <h1 className="cart__title">Корзина</h1>
                            <div className="cart-list">
                                <div className="list-item d-flex flex-row align-items-center">
                                    <div className="list-item__image">
                                        <img src="/images/pizza/mexican/mexican-small.jpg" alt="Мексиканская"/>
                                    </div>
                                    <div className="list-item__product d-flex flex-column">
                                        <div className="list-item__product-name">Мексиканская</div>
                                        <div className="list-item__product-description">
                                            Средняя 30 см, тонкое тесто
                                            <div className="list-item__product-ingredients">
                                                Добавлено: Острый халапеньо
                                            </div>
                                            <div className="list-item__product-ingredients">
                                                Убрано: Ветчина
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item__control d-flex align-items-center">
                                        <button>
                                            <i className="svg-icon">
                                                <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                                                    <g>
                                                        <rect fill="#FF6900" x="0" y="4" width="10" height="2"
                                                              rx="1"/>
                                                    </g>
                                                </svg>
                                            </i>
                                        </button>
                                        <div className="list-item__control-count">1</div>
                                        <button>
                                            <i className="svg-icon">
                                                <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                                                    <g>
                                                        <rect fill="#FF6900" x="4" y="0" width="2" height="10"
                                                              ry="1"/>
                                                        <rect fill="#FF6900" x="0" y="4" width="10" height="2"
                                                              rx="1"/>
                                                    </g>
                                                </svg>
                                            </i>
                                        </button>
                                    </div>
                                    <div className="list-item__price">435 Р</div>
                                    <div className="list-item__remove">
                                        <i className="svg-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.75 6H5.25L5.90993 15.8047C5.97132 16.8184 6.50848 17.5 7.39863 17.5H12.6014C13.4915 17.5 14.0133 16.8184 14.0901 15.8047L14.75 6Z"
                                                    fill="#373535"/>
                                                <path
                                                    d="M13.8498 3.00681L6.19643 3.00688C4.98382 2.88702 5.02127 4.36489 5 5L14.9917 4.99999C15.0165 4.38088 15.0624 3.12667 13.8498 3.00681Z"
                                                    fill="#373535"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart