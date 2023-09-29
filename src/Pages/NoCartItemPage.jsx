import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const NoCartItemPage = () => {
    const { currentUser } = useAuth()
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'
                style={{
                    height: "92vh",
                    backgroundColor: "lightgoldenrodyellow",
                    padding: "20px"
                }}>
                <Container style={{ textAlign: "center" }}>
                    <h1>EXPLORE OPPORTUNITIES</h1>
                    {currentUser ? <p>NO ITEM IN THE CART</p>: ""}
                    <Link to="/" style={{ textDecoration: "none", color: "red" }}>VISIT STORE</Link>
                    <div className="mt-2">{!currentUser ? (<div className='m-2'><h5>NOT SIGNED IN YET?</h5>
                    <NavLink to="/login"><button className="btn btn-primary m-2 btn-lg">LOG IN</button></NavLink>
                   <NavLink to="/register"><button className='btn btn-success btn-lg'>SIGN UP</button></NavLink>
                    </div>)
                        : null}
                    </div>
                </Container>
            </div>
        </>
    )
}
export default NoCartItemPage