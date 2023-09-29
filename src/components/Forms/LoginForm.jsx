import React, { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./MainForm.css"
import RegisterForm from "./RegisterForm"
import { useAuth } from "../../context/AuthContext"

import formImage from "../../assets/img.jpg"
import { Alert } from "react-bootstrap"


const LoginForm = () => {
    const { logIn } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        }
        catch (err) {
            setError("FAILED TO SIGN IN")
        }
        setLoading(false)

    }
    return (
        <form onSubmit={handleLogIn} onChange={() => setError()}>
            <div className="login-card">
                <div className="inner-card">
                    <div className="form-image">
                        <img src={formImage} width="100%" height="100%" />
                    </div>
                    <div className="front-card">
                        <h3>SHOPPIE</h3>
                        <h4>LOGIN!!!</h4>
                        {error ? <Alert variant="danger">{error}</Alert>: null}
                        <input type="text" ref={emailRef}
                        className="form-control-lg"
                            placeholder="enter your name" />
                        <input type="password" ref={passwordRef}
                        className="form-control-lg"
                            placeholder="enter password" />
                        <button className="btn btn-outline-primary">LOGIN</button>
                        <span>Haven't Registered yet?</span>
                        <button disabled={loading} className="btn btn-outline-success"><Link className="link" to="/register" element={<RegisterForm />}>REGISTER</Link></button>
                    </div>
                </div>
            </div>
        </form>

    )
}
export default LoginForm