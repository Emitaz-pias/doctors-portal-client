import React from "react";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import flouride from "../../../images/flouride.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const serviceData = [
  {
    name: "Flouride Treatment",
    img: flouride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Tooth whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="servieContainer mt-5 ">
      <div className="text-center">
        <h5 style={{ color: " #1cc7c1" }}>OUR SERVICES</h5>
        <h2>Service We Provide</h2>
      </div>
      <div className=" d-flex justify-content-center ">
        <div className="w-75 mt-5 pt-5 row">
          {serviceData.map((service) => (
            <ServiceDetails serviceData={service}></ServiceDetails>
          ))}
        </div>
        v
      </div>
    </section>
  );
};

export default Services;
