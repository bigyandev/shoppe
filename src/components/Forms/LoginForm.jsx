import React from "react"
import { Link } from "react-router-dom"
import "./MainForm.css"
import RegisterForm from "./RegisterForm"
import formImage from "../../assets/img.jpg"

const LoginForm = () => {
    
    return (
            <div className="login-card">
                <div className="inner-card">
                <div className="form-image">
                            <img src={formImage} width="100%" height="100%"/>
                        </div>
                    <div className="front-card">
                        <h1>SHOPPIE</h1>
                        <h2>LOGIN!!!</h2>
                        <p style={{ color: "red" }}></p>
                        <input type="text" className="form-control-lg"
                            placeholder="enter your name" />
                        <input type="password" className="form-control-lg"
                            placeholder="enter password" />
                        <button className="btn btn-outline-primary">LOGIN</button>
                        <p>Haven't Registered yet?</p>
                        <button className="btn btn-outline-success"><Link className="link" to="/register" element={<RegisterForm />}>REGISTER</Link></button>
                    </div>
                </div>
            </div>
       
    )
}
export default LoginForm