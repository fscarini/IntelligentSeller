import React from "react";
import navbar from "../../../images/navbar-logo.png";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={navbar}
            alt="Logo"
            width="220"
            height="36"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler toggler-styles"
          type="button"
          data-bs-target="#navbarTogglerDemo02"
          data-bs-toggle="collapse"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color: "#FAFAFA"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="li-style nav-item">
              <a className="nav-link li-a-style" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="li-style nav-item">
              <a className="nav-link li-a-style" href="https://github.com/fscarini/IntelligentSeller" target="_blank">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
