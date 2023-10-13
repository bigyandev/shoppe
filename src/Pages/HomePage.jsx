import React from "react"

import AboutContent from "../components/AboutContent"
import HomeHeader from "../components/HomeHeader"
import CartProduct from "../components/CartProduct"
import { OuterLayout } from "../Layout/OuterLayout"
import { useData } from "../context/ApiContext"
import SearchBar from "../components/SearchBar"
import { useState } from "react"
import { useEffect } from "react"

const HomePage = () => {
    const { products, loading } = useData()
    const [searchProduct, setSearchProduct] = useState("")
    const [filterProduct, setFilterProduct] = useState([])
    useEffect(() => {
       const filteredProducts =  products.filter((product) => {
            return product.title.toLowerCase().includes(searchProduct)
        })
        setFilterProduct(filteredProducts)
        console.log(filterProduct)
    },[searchProduct])
    return <OuterLayout>
        <HomeHeader />
        <AboutContent />
        <SearchBar products={products}  
        setSearchProduct={setSearchProduct}/>
        {loading ? "loading..." : <CartProduct products={filterProduct} />}
    </OuterLayout>

}
export default HomePage