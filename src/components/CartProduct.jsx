import React from "react"
import { Link } from "react-router-dom"

import "./CartProduct.css"

const CartProduct = ({products}) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) =>
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black"
                            }}
                            to={`/cart/${product.id}`}>
                            <div className="card mb-3"
                                style={{
                                    boxSizing: "border-box",
                                    height: "400px"
                                }}>
                                <img src={product.image}
                                    className="card-img-top"
                                    style={{ height: "250px" }} />
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <div className="card-title">{product.title}</div>
                                    <div className="card-text">${product.price}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )

}
export default CartProduct