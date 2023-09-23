import React from "react"

import homePageImg from "../assets/homepage.jpg"
import "./HomeHeader.css"

const HomeHeader = () => {
    return <>
        <div className="bg-img" alt="background" style={{
            backgroundImage: `url(${homePageImg}`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "90vh",
            transform: "translateY(-9%)"
        }}>
            <div className="header-text">
                <h3>INTRODUCING THE LATEST CLOTHES</h3>
                <p>This season, our new summer collection embraces
                    designs to provide comfort and style -
                    ensuring you're well-prepared for whatever comes your way.</p>
                <p className="explore-class" onClick={(e) => window.scrollTo(0, 500)}>explore our product
                    <i className="bi bi-arrow-right"></i></p>
            </div>
        </div>

    </>
}
export default HomeHeader