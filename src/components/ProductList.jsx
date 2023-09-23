import React from "react"
import { useCart } from "../context/CardContext"

const ProductList = ({ title, image, qty, color, size, price, id, selectedQty }) => {
    const { handleQty, removeFromCart, totalIndividualPrice } = useCart()

    return (
        <div className="d-flex align-items-start justify-content-start flex-column"
            style={{ minHeight: "140px", width: "100%" }}>
            <div className="d-flex justify-content-start" style={{ width: "100%" }}>
                <img src={image}
                    style={{ height: "150px", width: "150px", border: "2px solid black", borderRadius: "5px" }} />
                <div className="d-flex justify-content-start align-items-start flex-column"
                    style={{ width: "100%" }}>
                    <h5 className="p-2" style={{ textAlign: "center" }}>{title}</h5>
                    <p className="m-1" >COLOR:{color}</p>
                    <p className="m-1">SIZE:{size}</p>
                    <btn className="m-2 btn btn-outline-danger btn-sm" onClick={() => removeFromCart(id)}>REMOVE</btn>
                    <div className="d-flex justify-content-end align-items-start gap-2" style={{ width: "100%" }}>
                        <h3>${totalIndividualPrice(price, selectedQty)}</h3>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end align-items-start" style={{ width: "100%" }}>
                <select value={selectedQty} onChange={(e) => handleQty(e.target.value, id)} style={{ width: "25%" }}>
                    {qty.map((qty) => <option style={{ transition: "0.2s ease" }} value={qty}>{qty}</option>)}
                </select>
            </div>
        </div>
    )
}
export default ProductList