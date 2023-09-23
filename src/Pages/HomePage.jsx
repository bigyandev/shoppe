import React from "react"

import AboutContent from "../components/AboutContent"
import HomeHeader from "../components/HomeHeader"
import CartProduct from "../components/CartProduct"
import { OuterLayout } from "../Layout/OuterLayout"
import { useData } from "../context/ApiContext"

const HomePage = () => {
    const { products, loading } = useData()
    return <OuterLayout>
        <HomeHeader />
        <AboutContent />
        {loading ? "loading..." :<CartProduct products={products}/>}
    </OuterLayout>

}
export default HomePage