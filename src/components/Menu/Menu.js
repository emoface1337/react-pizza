import React from "react"
import './Menu.sass'
import Category from "./Category/Category"

const Menu = ({categories, popupOpen, cartItems}) => {
    return (
        <main>
            {
                categories ?
                    categories.map(category => (
                        <Category
                            key={category.id}
                            category={category}
                            popupOpen={popupOpen}
                            cartItems={cartItems}
                        />
                    ))
                    :
                    null
            }
        </main>
    )
}

export default Menu