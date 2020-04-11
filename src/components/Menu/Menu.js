import React from "react"
import './Menu.sass'
import Category from "./Category/Category";

const Menu = ({categories, popupOpen, addToCart, currentSelectedProducts, unselectProduct}) => {
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
                            currentSelectedProducts={currentSelectedProducts}
                            unselectProduct={unselectProduct}
                        />
                    ))
                    :
                    null
            }
        </main>
    )
}

export default Menu