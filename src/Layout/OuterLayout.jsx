import React from "react"
import { MobileNavbar } from "../components/NavBar/MobileNavbar"
import NavBar from "../components/NavBar/NavBar"
import { useInnerWidth } from "../hooks/useInnerWidth"

export const OuterLayout = ({children}) => {
    const {innerWidth} = useInnerWidth()
    return (
        <>
        {innerWidth ? <MobileNavbar/> : <NavBar />}
        {children}
        </>
    )
}