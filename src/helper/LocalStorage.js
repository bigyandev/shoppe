
export const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("card")) || []
}
export  const setCartFromLocalStorage = (card) => {
    return localStorage.setItem("card",JSON.stringify(card))
}