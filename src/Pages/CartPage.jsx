import React from "react"
import { useCart } from "../context/CardContext"
import { OuterLayout } from "../Layout/OuterLayout"
import NoCartItemPage from "./NoCartItemPage"
import SelectedItemPage from "./SelectedCartItem"

const CartPage = () => {
    const { card } = useCart()
    console.log(card)
    return (
        <OuterLayout>
            {card.length ? <SelectedItemPage /> : <NoCartItemPage />}
        </OuterLayout>
    )

}
export default CartPage