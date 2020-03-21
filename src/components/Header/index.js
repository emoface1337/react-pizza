import React from 'react'
import './Header.sass'

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-logo">
                            <h1>Hello Pizza</h1>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-md-2">
                        <div className="header-button">
                            <button className="header-button__button">Корзина</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header