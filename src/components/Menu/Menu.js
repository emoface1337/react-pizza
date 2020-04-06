import React from "react"
import './Menu.sass'
import Category from "./Category/Category";

const Menu = ({categories, popupOpen, addToCart}) => {
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
                        />
                    ))
                    :
                    null
            }
        </main>
    )
}

export default Menu