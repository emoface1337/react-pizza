import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ingredients, removeIngredient, addedToppings}) => {

    return (
        <div className="pizza__ingredients">
            {
                ingredients.map((ingredient, index) => {
                    return (
                        <Ingredient
                            key={index}
                            ingredient={ingredient}
                            removeIngredient={removeIngredient}
                            addedToppings={addedToppings}
                        />
                    )
                })
            }
            {
                addedToppings.length > 0 ?
                    addedToppings.map((topping, index) => {
                        return (
                            <Ingredient
                                key={index}
                                ingredient={topping}
                            />
                        )
                    })
                    :
                    null
            }
        </div>
    )
}

export default Ingredients