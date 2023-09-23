import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useCart } from "../../context/CardContext"
import {useHandleScroll} from "../../hooks/useHandleScroll.js"

import "./NavBar.css"

const NavBar = () => {
    const location = useLocation()
    const { pathname } = location;
    const { scroll } = useHandleScroll()
    const inHomePage = pathname === "/"
    const {totalProducts} = useCart()

    const changeColor = () => {
        if (scroll && inHomePage) {
            return "text-dark"
        }
        else if (!inHomePage) {
            return "text-dark"
        }
        else {
            return "text-light"
        }
    }

    return (
        <nav className={`navbar sticky-top navbar-expand-lg ${scroll || !inHomePage ? "scroll-nav" : ""} 
        bg-${scroll && inHomePage ? "light" : "transparent"} 
        text-${scroll && inHomePage ? "dark" : "light"}`}>
            <div className="container">
                <div className={`navbar-brand ${changeColor()}`}>SHOPPIES</div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/"
                            className={`nav-link ${changeColor()}`}>STORE
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/cart"
                            className={`nav-link ${changeColor()}`}>MY BAG<span>{totalProducts() ? `(${totalProducts()})` : ""}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login"
                            className={`nav-link ${changeColor()}`}>ACCOUNT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar