import React from "react"
import './Menu.sass'
import Category from "./Category/Category";

const Menu = ({categories, popupOpen, addToCart, cartItems, removeItem}) => {
    return (
        <main>
            {
                categories ?
                    categories.map(category => (
                        <Category
                            key={category.id}
                            category={category}
                            popupOpen={popupOpen}
                            addToCart={addToCart}
                            cartItems={cartItems}
                            removeItem={removeItem}
                        />
                    ))
                    :
                    null
            }
        </main>
    )
}

export default Menu