
import React, {useState, useEffect} from "react"

export const useInnerWidth = () => {
   const [innerWidth, setInnerWidth] = useState(false) 
   useEffect(() => {
    const inWidth = () => {
        if(window.innerWidth < 1020) {
            setInnerWidth(true)
        }
        else {
            setInnerWidth(false)
        }
    }
    window.addEventListener("resize", inWidth)
    return () => {
        window.removeEventListener('resize', inWidth)
       }
   },[innerWidth])
   return {innerWidth}
}