import React from "react";
import "./Navbar.css";
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top my-nav d-block">
        <div class="container">
          <a class="navbar-brand" href="#home">
            <img src={Logo} alt="" width="200" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 fs-4 navs ">
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/doctors"
                >
                  Find Doctors
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/medical"
                >
                  Find Medical
                </Link>
              </li>
            </ul>
            <div className="buttons ms-auto">
              <Link to="/login">
                <button className="btn btn-outline me-3">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-fill">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
