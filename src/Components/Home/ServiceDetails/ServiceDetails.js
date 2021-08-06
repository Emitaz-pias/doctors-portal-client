import React from "react";

const ServiceDetails = ({ serviceData }) => {
  return (
    <div className="col-md-4 text-center">
      <img src={serviceData.img} style={{ height: "50px" }} alt="dental" />
      <h5 className="mt-1">{serviceData.name}</h5>
      <p className="mt-5 text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ullam
        quidem quam eaque voluptatum laborum?
      </p>
    </div>
  );
};

export default ServiceDetails;
