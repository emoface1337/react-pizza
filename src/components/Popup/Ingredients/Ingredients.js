import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ingredients, removeIngredient}) => {
    return (
        <div className="pizza__ingredients">
            {
                ingredients.map((ingredient, index) => {
                    return (
                        <Ingredient
                            key={index}
                            ingredient={ingredient}
                            removeIngredient={removeIngredient}
                        />
                    )
                })
            }
        </div>
    )
}

export default Ingredients