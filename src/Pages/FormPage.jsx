import React from "react"
import { OuterLayout } from "../Layout/OuterLayout"
import LoginForm from "../components/Forms/LoginForm"


const FormPage = () => {
    const formPage = {
        height: "90vh",
        width: "100vw"
    }
    return <OuterLayout>
        <div className="formPage d-flex justify-content-center align-items-center" style={{ height: "90vh",width:"100vw" }}>
            <LoginForm />
        </div>
    </OuterLayout>
}
export default FormPage