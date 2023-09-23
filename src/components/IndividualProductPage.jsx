import React, { useRef } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import { useData } from "../context/ApiContext"
import { useCart } from "../context/CardContext"


import "./IndividualProductPage.css"
import ModalBox from "./ModalBox"

const IndividualProductPage = () => {
    const { id } = useParams()
    const { products } = useData()
    const { addToCart,modal } = useCart()
    const mySize = useRef([])
    const myColor = useRef([])
   

    const addSizeBorder = (e) => {
        removeSizeBorder()
        e.target.classList.add("addborder")
    }

    const addColorBorder = (e) => {
        removeColorBorder()
        e.target.classList.add("addborder")
    }

    const removeSizeBorder = () => {
        mySize.current.forEach((size) => {
            if (size.classList.contains("addborder")) {
                size.classList.remove("addborder")
            }
        })
    }
    const removeColorBorder = () => {
        myColor.current.forEach((size) => {
            if (size.classList.contains("addborder")) {
                size.classList.remove("addborder")
            }
        })
    }
    
    return (
        <div className="product">
            {products.map((product) => product.id === parseFloat(id) ?
                <div className="container">
                    <div className= "d-flex jusitfy-content-center align-items-center gap-3"
                        style={{ height: "100%", width: "100%"}}>
                        <div className="image">
                            <img src={product.image} className="product-image"
                                alt={product.title} />
                        </div>
                       
                        <div className="product-details" style={{ width: "50%", padding: "10px" }}>
                            <div className="product-title"><h3>{product.title}</h3></div>
                            <div className="product-des"><p>{product.description}</p></div>
                            <h6>SELECT SIZE</h6>
                            <div className="btn-groups">
                                {product.sizes.map((size, index) => {
                                    return <div ref={el => mySize.current[index] = el}
                                        onClick={(e) => addSizeBorder(e)}
                                        className="btn-size">{size}</div>
                                })}
                            </div>
                            <h6>SELECT COLOR</h6>
                            <div className="btn-groups" >
                                {product.color.map((col, index) => {
                                    return <div ref={el => myColor.current[index] = el}
                                        onClick={(e) => addColorBorder(e)}
                                        className="btn-size">{col}</div>
                                })}
                            </div>
                           
                            <h5>${product.price}</h5>
                            <button className="btn btn-lg btn-dark"
                                onClick={() => addToCart(product, mySize.current, myColor.current)} style={{ width: "100%" }}>ADD TO CART</button>
                        </div>
                    </div>
                   
                </div>
                : null
            )}
        </div>
    )
}

export default IndividualProductPage