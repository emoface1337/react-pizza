import React from "react"
import './Menu.sass'
import Category from "./Category/Category";

const Menu = ({categories, popupOpen}) => {
    return (
        <main>
            {
                categories ?
                    categories.map(category => (
                        <Category
                            key={category.id}
                            category={category}
                            popupOpen={popupOpen}
                        />
                    ))
                    :
                    null
            }
        </main>
    )
}

export default Menu