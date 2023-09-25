import React, { createContext, useContext, useState } from "react"
import { useEffect } from "react";
import { getCartFromLocalStorage, setCartFromLocalStorage } from "../helper/LocalStorage";

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
    const [card, setCard] = useState(getCartFromLocalStorage())
    const [modal, setModal] = useState(false)
    const addToCart = (item, mySize, myColor) => {
        const selectedSize = mySize.find((size) => size.classList.contains("addborder"));
        const selectedColor = myColor.find((color) => color.classList.contains("addborder"));
        const isItemInCart = card.find((card) => card.id === item.id)

        if (!selectedColor || !selectedSize) {
            alert("please select the size and color")
            return;
        }

        if (!isItemInCart) {
            const newItem = {
                ...item,
                size: selectedSize.innerHTML,
                color: selectedColor.innerHTML,
                selectedQty: 1,
            }

            setCard([...card, newItem])
        }
        else {
            setModal(true)
        }

    }

    const handleQty = (newQty, itemId) => {
        const updatedCard = card.map((item) =>
            item.id === itemId ? { ...item, selectedQty: newQty } : item
        )
        setCard(updatedCard)
    }

    const removeFromCart = (id) => {
        const newCard = card.filter((card) => card.id !== id)
        setCard(newCard)

    }

    const totalIndividualPrice = (price, qty) => {
        return price * qty
    }

    const totalProducts = () => {
        if (card.length > 0) {
            return card.length
        }
    }
    //update localStorage //
    useEffect(() => {
        setCartFromLocalStorage(card)
    }, [card])
    return <CardContext.Provider value={{ addToCart, handleQty, removeFromCart, totalIndividualPrice, totalProducts, card, modal, setModal }}>{children}</CardContext.Provider>

}
export const useCart = () => {
    return useContext(CardContext)
}
