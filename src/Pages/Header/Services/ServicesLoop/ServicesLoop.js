import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./ServicesLoop.css";

const ServicesLoop = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`./services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="map-services">
        {services.map((service) => (
          <SingleService service={service} key={service.key}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoop;
