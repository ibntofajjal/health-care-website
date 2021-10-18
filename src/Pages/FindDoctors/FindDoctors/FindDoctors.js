import React, { useEffect, useState } from "react";
import "./FindDoctors.css";
import MinFooter from "../../Footer/MinFooter/MinFooter";
import Doctor from "./Doctor";

const FindDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(`./doctors.JSON`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="container">
      <div className="map-doctors">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.key}></Doctor>
        ))}
      </div>
      {/* Footer */}
      <MinFooter></MinFooter>
    </div>
  );
};

export default FindDoctors;
