import React from "react"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CardContext"
import { OuterLayout } from "../Layout/OuterLayout"
import NoCartItemPage from "./NoCartItemPage"
import SelectedItemPage from "./SelectedCartItem"

const CartPage = () => {
    const { card } = useCart()
    const {currentUser} = useAuth()
    return (
        <OuterLayout>
            {card.length && currentUser ? <SelectedItemPage /> : <NoCartItemPage />}
        </OuterLayout>
    )

}
export default CartPage