import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ingredients, addedToppings, removeIngredient}) => {

    return (
        <div className="pizza__ingredients">
            {
                ingredients.map((ingredient, index) => {
                    return (
                        <Ingredient
                            key={index}
                            ingredient={ingredient}
                            isLast={ingredients.length-1 === index}
                            addedToppings={addedToppings}
                            removeIngredient={removeIngredient}
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
                                ingredient={undefined}
                                topping={topping}
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