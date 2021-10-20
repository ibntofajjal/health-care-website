import React, { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import {
  BsFillTelephonePlusFill,
  BsAwardFill,
  BsArrowDownCircleFill,
} from "react-icons/bs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Consultation.css";
import MinFooter from "../../Footer/MinFooter/MinFooter";

const Consultation = () => {
  const { serviceID } = useParams();

  const [details, setDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/MostafizurSawon/59-ema-john-authenticaiton/main/public/servicesDetails.json`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data.details))
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);

  useEffect(() => {
    const foundDetails = details.find((detail) => detail.key === serviceID);
    setSingleDetails(foundDetails);
  }, [details]);

  return (
    <>
      <div className="container">
        <div className="title-detail-page">
          <h1>Consult With Him/Her</h1>
        </div>
        <div className="doctor-detail">
          <div className="doctor-img">
            <img src={singleDetails?.img} className="img-fluid" alt="" />
          </div>
          <div className="doctor-info pb-3">
            <h1>
              Name: <i className="text-warning"> {singleDetails?.name}</i>
              <BsAwardFill />
            </h1>
            <h1>
              Country: <i className="text-warning"> {singleDetails?.country}</i>
            </h1>
            <h1>
              Experience:
              <i className="text-warning"> {singleDetails?.experience}</i>
            </h1>
            <div className="doc-buttons">
              <button className="special-btn me-2">
                <BsFillTelephonePlusFill /> Call
              </button>
              <Link to="/home">
                <button className="special-btn">
                  <FcPrevious /> Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MinFooter></MinFooter>
    </>
  );
};

export default Consultation;
