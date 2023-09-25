import React from "react"

import { useCart } from "../context/CardContext"
import ProductList from "../components/ProductList"
import TotalPrice from "../components/TotalPrice"

const SelectedItemPage = () => {
    const { card } = useCart()
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>SHOPPING BAG</h1>
                    <hr style={{ width: "100%" }} />
                    <div className="col-lg-7" style={{ width: "65%", backgroundColor: "#f1f1f1", minHeight: "600px" }}>
                        {card.map((product) => <ProductList key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            qty={product.quantity}
                            size={product.size}
                            color={product.color}
                            price={product.price}
                            selectedQty={product.selectedQty}
                        />)}
                    </div>
                    <div className="col-lg-4 m-4"
                        style={{
                            width: "30%",
                            backgroundColor: "#f1f1f1",
                            height: "200px",
                            position: "fixed",
                            right: "20px",
                            top: "115px"
                        }}>
                        <TotalPrice />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectedItemPage