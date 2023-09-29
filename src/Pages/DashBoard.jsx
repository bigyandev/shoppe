import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { OuterLayout } from "../Layout/OuterLayout"

 const DashBoard = () => {
    const navigate = useNavigate()
    const {currentUser, signOut} = useAuth()
    const handleSignOut = () => {
       signOut()
       navigate("/login")
    }
    return (
        <OuterLayout>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{width: "100vw",height:"91vh", backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"}}>
                <div className="d-flex justify-content-center align-items-center flex-column gap-3 bg-white"
                style={{border: "2px solid black",borderRadius: "10px", maxWidth: "500px",padding: "20px",textAlign:"center"}}>
                    <h1 className="text-primary">PROFILE</h1>
                    <h3><span className="text-muted">USER:</span> {currentUser.email.split("@")[0].toUpperCase()}</h3>
                    <h3><span className="text-muted">EMAIL:</span> {currentUser.email}</h3>
                    <button className="btn btn-outline-danger" onClick={() => handleSignOut()}>SIGN OUT</button>
                    <p><i>"At Shoppe, we believe that shopping should be a delightful experience that caters to your every need and desire. That's why we've created an online shopping platform that's more than just a store; it's a lifestyle. With an extensive range of products, user-friendly features, and a commitment to customer satisfaction,
                         Shoppe is your one-stop-shop for all your shopping desires."</i></p>
                    <h6>thanks for shopping with us</h6>
                </div>
            </div>
            </OuterLayout>
    )
}
export default DashBoard
