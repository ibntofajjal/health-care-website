import React from "react";
import "./Home.css";
import CallingDemo from "../../../img/doc-0.png";
import { BsFillGeoAltFill, BsSearch } from "react-icons/bs";
import Services from "../../Header/Services/Services/Services";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div>.</div>
        <div className="text-field">
          <h2>Remove Doubts</h2>
          <h1>Free Doctor Consultation</h1>
          <p className="my-3">
            24/7 video Consultations. Private consultation + Audio call <br />{" "}
            Starts at just $24. Exclusively on <i>web-app</i>
          </p>
        </div>

        <div className="input-area my-5">
          <BsFillGeoAltFill /> New York,USA ㅤ│ ㅤ<BsSearch />
          <input
            className="ms-2"
            type="search"
            name="search"
            id=""
            placeholder="Are You Looking For..."
          />
          <button className="btn btn-fill ms-3">
            <BsSearch /> Search
          </button>
        </div>

        <div className="looking-for container">
          <div className="row">
            <div className="cards">
              <div className="card">
                <h4>Doctors</h4>
                <h6>Book an appointment</h6>
              </div>
              <div className="card">
                <h4>Consult</h4>
                <h6>With top doctors</h6>
              </div>
              <div className="card">
                <h4>Pharmacy</h4>
                <h6>Medicine Products</h6>
              </div>
              <div className="card">
                <h4>Diagnostic</h4>
                <h6>Tests & Checkups</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="calling-demo container">
          <img src={CallingDemo} className="img-fluid" alt="" />
        </div>
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
