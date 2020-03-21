import React from "react"
import "./App.sass"
import Header from "./components/Header"
import Menu from "./components/Menu"
import db from "./db"

export default class App extends React.Component {
    render() {
        return (
            <div className={"pizza-app"}>
                <Header/>
                <Menu products={db.pizza}/>
            </div>
        )
    }
}
