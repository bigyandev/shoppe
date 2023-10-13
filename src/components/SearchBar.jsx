import React, { useEffect } from "react"
import { useState } from "react"
import { useData } from "../context/ApiContext"

export const SearchBar = ({ products, setSearchProduct }) => {
  const handleSearch = (e) => {
    setSearchProduct(e.target.value)
  }
    return (
        <form className="d-flex justify-content-center align-items-center m-3 p-2" >
            <input type="text" className="form-control-lg" placeholder="SEARCH"
                style={{ width: "50%" }} onChange={(e) => handleSearch(e)}/>
        </form>
    )
}
export default SearchBar