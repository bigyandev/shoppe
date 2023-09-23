import React from "react"

import IndividualProductPage from "../components/IndividualProductPage"
import { OuterLayout } from "../Layout/OuterLayout"

const DisplayItem = () => {
    return <OuterLayout>
    <div style={{position: "relative"}}>
    <IndividualProductPage />
    </div>
    </OuterLayout>

}
export default DisplayItem