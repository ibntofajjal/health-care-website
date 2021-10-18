import React from "react";
import "./Services.css";
import Baby from "../../../../img/health-1.png";
import Stomach from "../../../../img/health-2.png";
import Psychiatry from "../../../../img/health-3.png";
import Urology from "../../../../img/health-4.png";
import Dermatology from "../../../../img/health-5.png";
import Infectous from "../../../../img/health-6.png";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="services container my-5">
        <div className="text-area">
          <h5>≽――― ( S E R V I C E S ) ―――≼</h5>
          <h3>
            Consult Top Doctors Online For <br />
            Any Health Concern
          </h3>
          <h5>
            Private online consultations with verified doctors in all
            specialists.
          </h5>
        </div>

        {/* Services Area */}
        <div className="services-area mb-5">
          <div className="row my-5">
            <div className="cards">
              <div className="services-card">
                <img src={Baby} className="img-fluid" width="50" alt="" />
                <p>Baby Health</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
              <div className="services-card">
                <img src={Stomach} className="img-fluid" width="50" alt="" />
                <p>Stomach</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
              <div className="services-card">
                <img src={Psychiatry} className="img-fluid" width="50" alt="" />
                <p>Psychiatry</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
              <div className="services-card">
                <img src={Urology} className="img-fluid" width="50" alt="" />
                <p>Urology</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
              <div className="services-card">
                <img
                  src={Dermatology}
                  className="img-fluid"
                  width="50"
                  alt=""
                />
                <p>Dermatology</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
              <div className="services-card">
                <img src={Infectous} className="img-fluid" width="50" alt="" />
                <p>Infectous Disease</p>
                <Link to="/login" className="text-decoration-none ">
                  <button className="special-btn">Consult Now</button>
                </Link>
              </div>
            </div>
          </div>
          {/* all specialist */}
          <div className="text-center">
            <Link to="/doctors">
              <button className="special-btn my-5 ">See All Specialists</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
