import React from "react";
import "./ExtraSection.css";
import Doctor1 from "../../../img/doc-1.png";
import Doctor2 from "../../../img/doc-2.png";
import Doctor3 from "../../../img/doc-3.png";
import Doctor4 from "../../../img/doc-4.png";
import getMembership from "../../../img/getMembership.png";

const ExtraSection = () => {
  return (
    <div>
      <div className="container">
        <div className="nearest-doctor flex">
          <div>
            <img src={Doctor1} className="img-fluid" alt="" />
          </div>
          <div className="nearest-doctor-info">
            <h1>Your Nearest Doctor</h1>
            <p>
              Seletct preferred doctor and time slot to book an in-clinic or
              video consultation. <br /> It's very easy and simple process to
              booking
            </p>
            <button className="special-btn">Find Doctor Now</button>
          </div>
          <div></div>
        </div>

        <div className="urgent-online-care flex">
          <div className="nearest-doctor-info">
            <h1>Urgent Online Care</h1>
            <p>
              Tell us your health concern and we will assign you a top doctor in
              60 sec.
            </p>
            <button className="special-btn">Take Appointment</button>
          </div>
          <div>
            <img src={Doctor2} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="get-membership">
          <img src={getMembership} className="img-fluid" width="100%" alt="" />
        </div>

        <div className="nearest-doctor flex my-5">
          <div>
            <img src={Doctor3} className="img-fluid" alt="" />
          </div>
          <div className="nearest-doctor-info">
            <h1>What Our Patients Say About Our Service</h1>
            <p>
              "Very Helpful. Far easier than doing same things on computer.
              Allow quick and easy search with speed booking. Evain Maintains
              History doctors visited" <br /> - guy Hawkins
            </p>
            <button className="special-btn">Find Doctor Now</button>
          </div>
        </div>

        <div className="urgent-online-care flex site-promo">
          <div className="nearest-doctor-info ">
            <h1>Sign in Consultation Website & Get $100 HealthCash</h1>
            <p>
              Access video contultation with USA's top doctors on the
              Contultation website. Connect with doctors online, We available
              24/7,from the comfort of you home
            </p>
            <button className="btn btn-fill">Sign in</button>
          </div>
          <div>
            <img src={Doctor4} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
