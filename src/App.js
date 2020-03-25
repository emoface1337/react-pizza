import React from "react"
import "./sass/App.sass"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import db from "./db"

export default class App extends React.Component {
    render() {
        return (
            <div className={"pizza-app"}>
                <Header/>
                <Menu products={db.pizza}/>
                <div className="popup">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="pizza-preview d-flex align-items-center justify-content-center">
                                    <img className="pizza-preview__image" src="/images/pizza/arriva/arriva-small.jpg"
                                         alt=""/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="pizza-configurator">
                                    <div className="pizza__title">Аррива!</div>
                                    <div className="pizza__info">
                                        25 см, Традиционное тесто, 390 г
                                    </div>
                                    <div className="pizza__ingredients">Соус бургер, цыплёнок, соус ранч, чоризо,
                                        сладкий
                                        перец, красный лук, моцарелла, томаты, чеснок
                                    </div>
                                    <div className="pizza__size">
                                        <input type="radio" id="small"/><label htmlFor="small">Маленькая</label>
                                        <input type="radio" id="medium"/><label htmlFor="medium">Средняя</label>
                                        <input type="radio" id="large"/><label htmlFor="large">Большая</label>
                                    </div>
                                    <div className="pizza__dough">
                                        <input type="radio" id="default"/><label htmlFor="default">Традиционное</label>
                                        <input type="radio" id="thin"/><label htmlFor="thin">Тонкое</label>
                                    </div>
                                    <div className="pizza-toppings__title">Добавить в пиццу</div>
                                    <div className="pizza-toppings">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 p-0">
                                                    <div className="toppings-item">
                                                        <div className="toppings-item__image">
                                                            <img src="/images/ingredients/mushrooms.png" alt="Грибы"/>
                                                        </div>
                                                        <div className="toppings-item__title">Грибы</div>
                                                        <div className="toppings-item__price">29₽</div>
                                                        <div className="toppings-item__add">
                                                            <svg viewBox="0 0 25 26" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="0.724121" width="25" height="25" rx="12.5"/>
                                                                <path fill="#ffffff" fillRule="evenodd"
                                                                      clipRule="evenodd"
                                                                      d="M13.3417 7.34352C13.3417 6.80997 12.9091 6.37744 12.3756 6.37744C11.842 6.37744 11.4095 6.80997 11.4095 7.34352V12.4695H6.69265C6.15909 12.4695 5.72656 12.902 5.72656 13.4355C5.72656 13.9691 6.15909 14.4016 6.69265 14.4016H11.4095V19.1174C11.4095 19.6509 11.842 20.0834 12.3756 20.0834C12.9091 20.0834 13.3417 19.6509 13.3417 19.1174V14.4016H18.4665C19 14.4016 19.4326 13.9691 19.4326 13.4355C19.4326 12.902 19 12.4695 18.4665 12.4695H13.3417V7.34352Z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 p-0">
                                                    <div className="toppings-item">
                                                        <div className="toppings-item__image">
                                                            <img src="/images/ingredients/mozarella.png"
                                                                 alt="Моцарелла"/>
                                                        </div>
                                                        <div className="toppings-item__title">Грибы</div>
                                                        <div className="toppings-item__price">29₽</div>
                                                        <div className="toppings-item__add">
                                                            <svg viewBox="0 0 25 26" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="0.724121" width="25" height="25" rx="12.5"/>
                                                                <path fill="#ffffff" fillRule="evenodd"
                                                                      clipRule="evenodd"
                                                                      d="M13.3417 7.34352C13.3417 6.80997 12.9091 6.37744 12.3756 6.37744C11.842 6.37744 11.4095 6.80997 11.4095 7.34352V12.4695H6.69265C6.15909 12.4695 5.72656 12.902 5.72656 13.4355C5.72656 13.9691 6.15909 14.4016 6.69265 14.4016H11.4095V19.1174C11.4095 19.6509 11.842 20.0834 12.3756 20.0834C12.9091 20.0834 13.3417 19.6509 13.3417 19.1174V14.4016H18.4665C19 14.4016 19.4326 13.9691 19.4326 13.4355C19.4326 12.902 19 12.4695 18.4665 12.4695H13.3417V7.34352Z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 p-0">
                                                    <div className="toppings-item">
                                                        <div className="toppings-item__image">
                                                            <img src="/images/ingredients/japaleno.png"
                                                                 alt="Халапеньо"/>
                                                        </div>
                                                        <div className="toppings-item__title">Грибы</div>
                                                        <div className="toppings-item__price">29₽</div>
                                                        <div className="toppings-item__add">
                                                            <svg viewBox="0 0 25 26" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="0.724121" width="25" height="25" rx="12.5"/>
                                                                <path fill="#ffffff" fillRule="evenodd"
                                                                      clipRule="evenodd"
                                                                      d="M13.3417 7.34352C13.3417 6.80997 12.9091 6.37744 12.3756 6.37744C11.842 6.37744 11.4095 6.80997 11.4095 7.34352V12.4695H6.69265C6.15909 12.4695 5.72656 12.902 5.72656 13.4355C5.72656 13.9691 6.15909 14.4016 6.69265 14.4016H11.4095V19.1174C11.4095 19.6509 11.842 20.0834 12.3756 20.0834C12.9091 20.0834 13.3417 19.6509 13.3417 19.1174V14.4016H18.4665C19 14.4016 19.4326 13.9691 19.4326 13.4355C19.4326 12.902 19 12.4695 18.4665 12.4695H13.3417V7.34352Z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
