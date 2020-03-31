import React from 'react'
import {useHistory} from 'react-router-dom'

import './Header.sass'

const Header = () => {

    let history = useHistory()

    const handleButtonClick = () => {
        history.push('/cart')
    }

    const handleLogoClick = () => {
        history.push('/')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="header-logo">
                            <h1 onClick={handleLogoClick}>Hello Pizza</h1>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="header-button">
                            <button className="header-button__button button-main" onClick={handleButtonClick}>Корзина
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header