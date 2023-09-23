import React from "react"
import { useCart } from "../context/CardContext"

const TotalPrice = () => {
 const {card} = useCart()
 const totalPrice = card.reduce((prev,cur) => prev + (cur.price * cur.selectedQty),0)
 return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{height: "100%"}}>
        <h3>TOTAL PRICE</h3>
         <h3>{(totalPrice)}</h3>
         <btn className="btn btn-outline-dark" style={{width: "80%"}}>PAY</btn>
    </div>
 )
}
export default TotalPrice