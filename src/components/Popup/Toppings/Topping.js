import React, {useState} from 'react'
import './Topping.sass'

const Topping = ({topping, onToppingClick}) => {

    const [isSelected, setSelected] = useState(false)

    return (
        <div className="col-md-4 p-0">
            <div className="toppings-item" onClick={
                () => {
                    onToppingClick(topping)
                    setSelected(!isSelected)
                }
            }>
                <div className="toppings-item__image">
                    <img
                        src={topping.image}
                        alt={topping.name}
                    />
                </div>
                <div className="toppings-item__title">{topping.name}</div>
                <div className="toppings-item__price">{topping.prices[0].price}₽</div>
                <div className="toppings-item__add">
                    {
                        isSelected ?
                            <svg width="25" height="25" viewBox="0 0 25 26" fill="black"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="25" rx="12.5"/>
                                <path fill="#ffffff" fillRule="evenodd" clipRule="evenodd"
                                      d="M18.8176 10.1346C19.1941 9.75658 19.1928 9.14489 18.8148 8.76838C18.4367 8.39187 17.825 8.39312 17.4485 8.77117L11.217 15.0282L8.45194 12.2631C8.07466 11.8858 7.46297 11.8858 7.08569 12.2631C6.70841 12.6404 6.70841 13.2521 7.08569 13.6294L10.5333 17.077C10.6924 17.2361 10.8933 17.3281 11.1006 17.353C11.3866 17.3884 11.6854 17.296 11.9045 17.076L18.8176 10.1346Z"/>
                            </svg>
                            :
                            <svg width="25" height="25" viewBox="0 0 25 26" fill="seagreen"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="25" rx="12.5"/>
                                <path fill="#ffffff" fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M13.3417 7.34352C13.3417 6.80997 12.9091 6.37744 12.3756 6.37744C11.842 6.37744 11.4095 6.80997 11.4095 7.34352V12.4695H6.69265C6.15909 12.4695 5.72656 12.902 5.72656 13.4355C5.72656 13.9691 6.15909 14.4016 6.69265 14.4016H11.4095V19.1174C11.4095 19.6509 11.842 20.0834 12.3756 20.0834C12.9091 20.0834 13.3417 19.6509 13.3417 19.1174V14.4016H18.4665C19 14.4016 19.4326 13.9691 19.4326 13.4355C19.4326 12.902 19 12.4695 18.4665 12.4695H13.3417V7.34352Z"/>
                            </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default Topping