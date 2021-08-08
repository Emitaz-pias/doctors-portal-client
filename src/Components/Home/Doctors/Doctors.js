import React from "react";
import doctor from "../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const doctorsData = [
  {
    name: "Dr.Coudi",
    img: doctor,
    tel: +1021415642124,
  },
  {
    name: "Dr.Coudi",
    img: doctor,
    tel: +1021415642124,
  },
  {
    name: "Dr.Coudi",
    img: doctor,
    tel: +1021415642124,
  },
];

const Doctors = () => {
  return (
    <section className="mt-5 pt-3 pb-5">
      <div className="container ">
        <h4 style={{ color: " #1cc7c1" }} className="text-center">
          Our Doctors
        </h4>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          {doctorsData.map((doctor) => (
            <div className="text-center">
              <img src={doctor.img} alt="" className="fluid w-100" />
              <h5 className="fw-bold mt-2">{doctor.name}</h5>
              <small className="text-secondary">
                <FontAwesomeIcon className="text-primary" icon={faPhone} />{" "}
                {doctor.tel}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
