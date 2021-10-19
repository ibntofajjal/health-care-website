import React from "react";
import { useParams } from "react-router";

const Consultation = () => {
  const { serviceID } = useParams();
  return (
    <div>
      <h1 style={{ marginTop: "6rem" }}>
        This is Consultation Page {serviceID}
      </h1>
    </div>
  );
};

export default Consultation;
