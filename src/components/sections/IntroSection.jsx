import React from 'react'
import sectionlogo from '../../images/logo-sombreada.png'

const IntroSection = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={sectionlogo} alt="logo" witdh="100" height="100"/>
            <h1>IntelligentSeller</h1>
            <h3>AI-Driven Solutions for Next-Level Sales.</h3>
            <hr className="my-4 bg-light opacity-100 w-75 mx-auto" />
        </div>
    )
}

export default IntroSection