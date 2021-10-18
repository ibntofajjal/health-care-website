import React from "react";
import { Link } from "react-router-dom";

import "./BigFooter.css";

const BigFooter = () => {
  return (
    <div>
      <div className="BigFooter my-5">
        <div className="container">
          <div className="catagories ">
            <div className="item">
              <h4>Consultation</h4>
              <Link to="/home" className="text-decoration-none">
                <li>About</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Blogs</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Careers</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Press</li>
              </Link>
            </div>

            <div className="item">
              <h4>For Patients</h4>
              <Link to="/home" className="text-decoration-none">
                <li>Search for Doctors</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Search for Clinic</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Search for Hospital</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Book Diagnostic Tests</li>
              </Link>
            </div>

            <div className="item">
              <h4>For Doctors</h4>
              <Link to="/home" className="text-decoration-none">
                <li>Doctors Profile</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Ray By Consultation</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Consultation Reach</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Consultation Pro</li>
              </Link>
            </div>

            <div className="item">
              <h4>For Hospital</h4>

              <Link to="/home" className="text-decoration-none">
                <li>Insta By Consultation</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Quick wel by Consultation</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Consulto Reach</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Consulto Drive</li>
              </Link>
            </div>

            <div className="item">
              <h4>More</h4>
              <Link to="/home" className="text-decoration-none">
                <li>Help</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Developers </li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/home" className="text-decoration-none">
                <li>Term & Condition</li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFooter;
