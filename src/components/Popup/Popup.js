import React, {useState} from 'react'
import './Popup.sass'
import Toppings from "./Toppings/Toppings";
import Ingredients from "./Ingredients/Ingredients";

const Popup = ({pizza, popupClose}) => {

    const [currentPrice, setCurrentPrice] = useState(Number(pizza.price.match(/\d/g).join('')))
    const [addedToppings, setAddedToppings] = useState([])
    const [removedIngredients, setRemovedIngredients] = useState([])

    const onToppingClick = (newTopping) => {
        if (!addedToppings.some(topping => topping.name === newTopping.name)) {
            setAddedToppings([...addedToppings, {name: newTopping.name, isRemovable: false}])
            setCurrentPrice(currentPrice + newTopping.prices[0].price)
        } else {
            setAddedToppings(addedToppings.filter(topping => topping.name !== newTopping.name))
            setCurrentPrice(currentPrice - newTopping.prices[0].price)
        }
    }

    const removeIngredient = (ingredient) => {
        if (!removedIngredients.some(ing => ing.name === ingredient.name)) {
            setRemovedIngredients([...removedIngredients, ingredient])
        } else {
            setRemovedIngredients(removedIngredients.filter(ing => ing.name !== ingredient.name))
        }
    }

    return (
        <div className="modal-popup">
            <div className="popup">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="pizza-preview d-flex align-items-center justify-content-center">
                                <img className="pizza-preview__image"
                                     src="/images/pizza/arriva/arriva-small.jpg"
                                     alt={pizza.name}/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="pizza-configurator">
                                <div className="pizza__title">{pizza.name}</div>
                                <div className="pizza__info">
                                    25 см, Традиционное тесто, 390 г
                                </div>
                                <Ingredients
                                    ingredients={pizza.ingredients}
                                    addedToppings={addedToppings}
                                    removeIngredient={removeIngredient}
                                />
                                {/*<div className="pizza__size">*/}
                                {/*    <input type="radio" id="small"/><label htmlFor="small">Маленькая</label>*/}
                                {/*    <input type="radio" id="medium"/><label htmlFor="medium">Средняя</label>*/}
                                {/*    <input type="radio" id="large"/><label htmlFor="large">Большая</label>*/}
                                {/*</div>*/}
                                {/*<div className="pizza__dough">*/}
                                {/*    <input type="radio" id="default"/><label*/}
                                {/*    htmlFor="default">Традиционное</label>*/}
                                {/*    <input type="radio" id="thin"/><label htmlFor="thin">Тонкое</label>*/}
                                {/*</div>*/}
                                <Toppings
                                    toppings={pizza.toppings}
                                    onToppingClick={onToppingClick}
                                    // isSelected={isSelected}
                                />
                                <button className="pizza__add-cart button-main">Добавить в корзину
                                    за {currentPrice} ₽
                                </button>
                            </div>
                        </div>
                    </div>
                    <i className="popup__close" onClick={() => popupClose()}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
                                  fill="white"/>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Popup