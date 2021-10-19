import React from "react";
import "./About.css";
import aboutImg from "../../img/about.png";
import MinFooter from "../Footer/MinFooter/MinFooter";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about-section">
          <div className="about-img">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div className="about-content">
            <p>
              "Consultation" is an online medical service targeting emerging
              markets that are rapidly digitising. Our mission is to improve the
              health and wellbeing of the populations we serve. We have
              developed accessible and affordable telehealth services that aims
              to support the public health system, research and clinical trials.{" "}
              <br /> <br />
              "Consultation" offers on-demand GP and specialist consultations
              with verified and certified doctors, online prescriptions,
              medicine delivery, pathology/ diagnostics tests, all while
              building valuable Electronic Health Records. <br /> <br />
              "Consultation" is vertically integrated with pharmacies/ medicine
              delivery suppliers, labs/ diagnostics centres, and payment
              providers for an end-to-end digital health experience. <br />{" "}
              <br />
              "Consultation" systematically focuses on expanding access to
              affordable healthcare services to all. We promise to improve our
              solutions continuously through our scalable technology and data
              analytics capabilities. Our passionate team is committed to
              excellence and work extremely hard to ensure we make a positive
              contribution to the healthcare of the future.
            </p>
          </div>
        </div>
      </div>
      <MinFooter></MinFooter>
    </div>
  );
};

export default About;
