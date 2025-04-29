import React from 'react';
import teste from '../../../images/teste.jpg'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={teste} 
                            alt="Logo" 
                            width="30" 
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        <span className="ms-3">IntelligentSeller</span>
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-target="#navbarTogglerDemo02" 
                        data-bs-toggle="collapse" 
                        aria-controls="navbarTogglerDemo02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Solutions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}


export default Navbar;
