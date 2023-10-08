import React, { useRef } from "react"
import { useParams } from "react-router-dom"

import ModalBox from "../components/ModalBox"
import { useAuth } from "../context/AuthContext"

import "./IndividualProductPage.css"

const IndividualProductPage = ({products, addToCart,modal,card}) => {
    const { id } = useParams()
    const mySize = useRef([])
    const myColor = useRef([])
    const {currentUser} = useAuth()

    const addBorder = (element, e) => {
      element.current.forEach((el) => el.classList.remove("addborder"))
      e.target.classList.add("addborder")
    }

    return (
        <div className="product">
            {products.map((product) => product.id === parseFloat(id) ?
                <div className="container" style={{marginTop: "10px"}}>
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
                                        onClick={(e) => addBorder(mySize,e)}
                                        className="btn-size">{size}</div>
                                })}
                            </div>
                            <h6>SELECT COLOR</h6>
                            <div className="btn-groups" >
                                {product.color.map((col, index) => {
                                    return <div ref={el => myColor.current[index] = el}
                                        onClick={(e) => addBorder(myColor,e)}
                                        className="btn-size">{col}</div>
                                })}
                            </div>
                           {card.map((card) => card.id === parseFloat(id) && modal ? <ModalBox/> : null)}
                            <h5>${product.price}</h5>
                            <button className="btn btn-lg btn-dark"
                                onClick={() => addToCart(product, mySize.current, myColor.current,currentUser.multiFactor.uid)} style={{ width: "100%" }}>ADD TO CART</button>
                        </div>
                    </div>
                   
                </div>
                : null
            )}
        </div>
    )
}

export default IndividualProductPage