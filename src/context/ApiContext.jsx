import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();

                const formattedProducts = data.map((product) => ({
                    ...product,
                    sizes: ["S", "M", "L", "XL"],
                    color: ["WHITE", "BLACK"],
                    quantity: [1, 2, 3, 4, 5],
                }));
                
                setProducts(formattedProducts);
                setLoading(false);
            } catch (error) {
                console.log(error.message)
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <CartContext.Provider value={{ products,loading }}>
            {children}
        </CartContext.Provider>
    );
};

export const useData = () => {
    return useContext(CartContext);
};
