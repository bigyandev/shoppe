import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { useCart } from "../../context/CardContext"

export const MobileNavbar = () => {
    const {totalProducts} = useCart()
    return <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">SHOPPIE</NavLink>
            <button className="navbar-toggler" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">SHOPPIE</h5>
                    <button  type="button"
                        className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">STORE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">MY BAG {totalProducts() ? `(${totalProducts()})` : ""}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}