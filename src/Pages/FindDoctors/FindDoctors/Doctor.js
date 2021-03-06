import React from "react";
import "./Doctor.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Doctor = (props) => {
  const { name, fee, specialist, img } = props.doctor;
  return (
    <div className="doctor-card">
      <img src={img} className="img-fluid" width="500" alt="" />
      <div className="doctor-info">
        <p>
          Name:{" "}
          <b>
            {name}{" "}
            <span className="text-warning">
              <BsFillCheckCircleFill />
            </span>
          </b>
        </p>
        <p>
          Consultation Fee: <b> ${fee}</b>
        </p>
        <p>
          Specialist: <b>{specialist}</b>
        </p>
      </div>
      <button>Get Consultation</button>
    </div>
  );
};

export default Doctor;
