import React, { useRef, useState, useEffect } from "react"
import { Link, useNavigate, useRevalidator } from "react-router-dom"
import { OuterLayout } from "../../Layout/OuterLayout.jsx"
import LoginForm from "./LoginForm.jsx"
import { useAuth } from "../../context/AuthContext.jsx"
import { Alert } from "react-bootstrap"
import { getUsers, saveUsersId } from "../../helper/firebaseStorage.js"

import "./MainForm.css"
import formImage from "../../assets/img.jpg"


const RegisterForm = () => {
    const navigate = useNavigate()
    const { signUp, userId } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const repasswordRef = useRef()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {currentUser} = useAuth()
  
    const handleRegister = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== repasswordRef.current.value) {
            return setError("password do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            await saveUsersId(emailRef.current.value,currentUser)
            navigate("/")
        }
        catch (err) {
            setError(err.message)
        }
        setLoading(false)

    }
    useEffect(() => {
        getUsers()
    })

    return (
        <OuterLayout>
            <form onSubmit={handleRegister} onChange={() => setError()}>
                <div className="formPage d-flex justify-content-center align-items-center" style={{ height: "90vh", width: "100%", backgroundColor: "#4158D0", backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)" }}>
                    <div className="login-card">
                        <div className="inner-card">
                            <div className="form-image">
                                <img src={formImage} width="100%" height="100%" />
                            </div>
                            <div className="front-card">
                                <h3>SHOPPIE</h3>
                                <h4>REGISTER!!!</h4>
                                {error ? <Alert variant="danger">{error}</Alert> : null}
                                <input type="text" ref={emailRef}
                                    className="form-control-lg"
                                    placeholder="enter your mail" />
                                <input type="password" ref={passwordRef}
                                    className="form-control-lg"
                                    placeholder="enter password" />
                                <input type="password" ref={repasswordRef}
                                    className="form-control-lg"
                                    placeholder="Re-Enter Your Password" />
                                <button className="btn btn-outline-success">REGISTER</button>
                                <span>Already Registered?</span>
                                <button disabled={loading} className="btn btn-outline-primary">
                                    <Link className="link" to="/login" element={<LoginForm />}>LOGIN</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </OuterLayout>
    )
}

export default RegisterForm