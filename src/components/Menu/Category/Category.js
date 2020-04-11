import React from "react"
import './Category.sass'
import Product from "../Product/Product";

const Category = ({category, popupOpen, addToCart, currentSelectedProducts, unselectProduct}) => {
    return (
        <section className="category">
            <div className="container">
                <h1 className="category__title">{category.title}</h1>
                <div className="row">
                    {
                        category.products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                popupOpen={popupOpen}
                                addToCart={addToCart}
                                currentSelectedProducts={currentSelectedProducts}
                                unselectProduct={unselectProduct}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category