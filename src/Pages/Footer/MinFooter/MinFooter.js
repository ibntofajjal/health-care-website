import React from "react";
import footerLogo from "../../../img/logo.png";
import "./MinFooter.css";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const MinFooter = () => {
  return (
    <div>
      <div className="container">
        <div className="min-footer py-3">
          <div className="footer-logo">
            <img src={footerLogo} className="img-fluid" width="200" alt="" />
          </div>
          <div className="footer-social">
            <h1>
              <BsFacebook />
            </h1>
            <h1>
              <BsTwitter />
            </h1>
            <h1>
              <BsInstagram />
            </h1>
            <h1>
              <BsYoutube />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinFooter;
