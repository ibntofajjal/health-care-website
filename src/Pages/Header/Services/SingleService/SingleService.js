import React from "react";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = (props) => {
  const { name, img, des, fee } = props.service;
  return (
    <div>
      <div className="service-card">
        <img src={img} className="img-fluid" width="100" alt="" />
        <p className="service-name">
          <b>{name}</b>
        </p>
        <small>{des}</small>
        <p>
          Fee: <b>${fee}</b>
        </p>

        <Link to="/login">
          <button className="consult-btn">Consult</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
