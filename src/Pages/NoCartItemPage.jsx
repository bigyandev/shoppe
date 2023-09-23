import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NoCartItemPage = () => {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center' 
        style={{height: "92vh", 
        backgroundColor: "lightgoldenrodyellow", 
        padding: "20px"}}>
        <Container style={{textAlign: "center"}}>
            <h1>EXPLORE OPPORTUNITIES</h1>
            <p>NO ITEM IN THE CART</p>
            <Link to="/" style={{textDecoration: "none", color: "red"}}>VISIT STORE</Link>
        </Container>
        </div>
        </>
    )
}
export default NoCartItemPage