import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { FcPrevious } from "react-icons/fc";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Not Found</p>
      <Link to="/home">
        <button className="special-btn">
          <FcPrevious /> Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
