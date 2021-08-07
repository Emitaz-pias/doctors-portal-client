import React from "react";
import doctor from "../../../images/doctor.png";
import "./Appointment.css";
const Appoinment = () => {
  return (
    <section className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="text-primary text-uppercase">Appointment</h5>
            <h1 className="">
              Make An Appointment <br />
              Today
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, harum.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
