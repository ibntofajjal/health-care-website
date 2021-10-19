import React from "react";
import "./Navbar.css";
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top my-nav d-block">
        <div class="container">
          <Link to="/home" class="navbar-brand">
            <img src={Logo} alt="" width="200" />
          </Link>
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
                  to="/about"
                >
                  About US
                </Link>
              </li>
            </ul>
            <i>
              User: <b>{user?.displayName}</b>
            </i>
            <div className="buttons ms-auto">
              {user?.email ? (
                <button onClick={logOut} className="btn btn-primary me-3">
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline me-3">Log In</button>
                </Link>
              )}
              {user?.email ? (
                <Link to="/signup">
                  <button className="btn btn-fill d-none">Sign up</button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button className="btn btn-fill ">Sign up</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
