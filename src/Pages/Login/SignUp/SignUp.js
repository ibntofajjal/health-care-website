import React from "react";
import "./SignUp.css";
import SignUpImg from "../../../img/SignUp.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <div className="container">
        <div className="login-form-container">
          <div className="login-img">
            <img src={SignUpImg} className="img-fluid" alt="" />
          </div>
          <div className="login-form">
            <h1 className="text-center text-light pb-3">SignUp</h1>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@mail.here"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password here"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm password here"
                required
              />
              <br />
              <input type="submit" value="Login" />
            </form>
            <p className="text-center mt-2 text-warning">≽――― ( O R ) ―――≼</p>
            <button onClick={signInUsingGoogle}>
              Sign up with <FcGoogle />
            </button>
            <Link to="./login" className="haveAccount text-decoration-none">
              <p className="text-center mt-2 text-light">
                Already have an account? Log in!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
