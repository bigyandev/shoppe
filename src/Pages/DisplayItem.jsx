import React from "react"

import IndividualProductPage from "../components/IndividualProductPage"
import { useData } from "../context/ApiContext"
import { useCart } from "../context/CardContext"
import { OuterLayout } from "../Layout/OuterLayout"

const DisplayItem = () => {
    const { products } = useData()
    const { addToCart,card,modal } = useCart()
    console.log(products)
    return <OuterLayout>
        <div style={{ position: "relative" }}>
            <IndividualProductPage products={products}
                addToCart={addToCart}
                modal={modal} 
                card={card}/>
        </div>
    </OuterLayout>

}
export default DisplayItem