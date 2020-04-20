import React from 'react'
import {useHistory} from 'react-router-dom'

import './Header.sass'

const Header = ({cartCount}) => {

    let history = useHistory()

    const handleCartButtonClick = () => {
        history.push('/cart')
    }

    const handleLogoClick = () => {
        history.push('/')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <div className="header-logo">
                            <h1 onClick={handleLogoClick}>Hello Pizza</h1>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="header-button">
                            <button className="header-button__button button-main"
                                    onClick={handleCartButtonClick}>Корзина ({cartCount})
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header