import React from "react"
import { OuterLayout } from "../Layout/OuterLayout"

const LoginForm = () => {
    return <OuterLayout>
     <div className="d-flex justify-content-center align-items-center flex-column gap-2"
     style={{height: "90vh", width: "100%", backgroundColor: 'lightgoldenrodyellow'}}>
        <form className="d-flex justify-content-center align-items-center flex-column gap-2"
        style={{height: "50%", width: "30%", border: "3px solid black", borderRadius: "10px", backgroundColor: "white"}}>
            <div className="form-group" style={{width: "90%"}}>
                <label htmlFor="username"
                style={{display: "block", textAlign: "center", lineHeight: "50px"}}>USERNAME</label>
                <input type="text" placeholder="username" className="form-control form-control-lg"></input>
            </div>
            <div className="form-group" style={{width: "90%"}}>
                <label htmlFor="password" 
                style={{display: "block", textAlign: "center", lineHeight: "50px"}}>PASSWORD</label>
                <input type="password" placeholder="password" className="form-control form-control-lg"></input>
            </div>
            <button className="btn btn-outline-primary btn-lg" style={{width: "90%"}}>submit</button>
        </form>
       
     </div>
    </OuterLayout>
}
export default LoginForm