import React from "react"
import { useEffect } from "react"
import { useCart } from "../context/CardContext"

import "./ModalBox.css"

const ModalBox = () => {
const {setModal} = useCart()

useEffect(() => {
    setTimeout(() => {
        setModal(false)
    }, 3000);
},[])
    return <div className="box">
          <p>ALLREADY IN THE BAG!!!</p>
          <div className="close btn-outline-danger" onClick={() => setModal(false)}>&times;</div>
    </div>

}
export default ModalBox