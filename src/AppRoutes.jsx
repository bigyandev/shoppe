import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CartPage from "./Pages/CartPage"
import DisplayItem from "./Pages/DisplayItem"
import LoginForm from "./Pages/FormPage"
import RegisterForm from "./components/Forms/RegisterForm"
import  DashBoard  from "./Pages/DashBoard"

export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />}>MY BAG</Route>
          <Route path="/cart/:id" element={<DisplayItem />} />
          <Route path="/login" element={<LoginForm />}>ACCOUNT</Route>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
    )
}