import React from "react";
import "./Login.css";
import LoginImg from "../../../img/Login.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <div className="container">
        <div className="login-form-container">
          <div className="login-img">
            <img src={LoginImg} className="img-fluid" alt="" />
          </div>
          <div className="login-form">
            <h1 className="text-center text-light pb-3">LogIn</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@mail.here"
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password here"
            />
            <br />
            <input type="submit" value="Login" />
            <p className="text-center mt-2 text-warning">≽――― ( O R ) ―――≼</p>
            <button onClick={signInUsingGoogle}>
              Login with <FcGoogle />
            </button>
            <Link to="./signup" className="haveAccount text-decoration-none">
              <p className="text-center mt-2 text-light">
                New to Consultation? Sign up for free!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
