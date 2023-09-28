import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { OuterLayout } from "../../Layout/OuterLayout.jsx"
import LoginForm from "./LoginForm.jsx"
import "./MainForm.css"
import formImage from "../../assets/img.jpg"


const RegisterForm = () => {
    return (
        <OuterLayout>
            <div className="formPage d-flex justify-content-center align-items-center" style={{ height: "90vh",width:"100%", backgroundColor: "#4158D0",backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}}>
                <div className="login-card">
                    <div className="inner-card">
                        <div className="form-image">
                            <img src={formImage} width="100%" height="100%"/>
                        </div>
                        <div className="front-card">
                            <h1>SHOPPIE</h1>
                            <h2>REGISTER!!!</h2>
                            <p style={{ color: "red" }}></p>
                            <input type="text" className="form-control-lg"
                                placeholder="enter your mail" />
                            <input type="password" className="form-control-lg"
                                placeholder="enter password" />
                            <input type="password" className="form-control-lg"
                                placeholder="Re-Enter Your Password" />
                            <button className="btn btn-outline-success">REGISTER</button>
                            <p>Already Registered?</p>
                            <button className="btn btn-outline-primary"><Link className="link" to="/login" element={<LoginForm />}>LOGIN</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </OuterLayout>
    )
}

export default RegisterForm