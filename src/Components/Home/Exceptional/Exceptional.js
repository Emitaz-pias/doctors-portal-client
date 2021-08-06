import React from "react";
import exceptional from "../../../images/exceptional.png";

const Exceptional = () => {
  return (
    <section className="featuresServices mt-5 pt-5">
      <div className="container d-flex justify-content-center mb-5">
        <div className="row mb-5 pb-5 w-75">
          <div className="col-md-5 mb-4 ">
            <img src={exceptional} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-md-7 mt-3">
            <h1>
              Exceptional Dental <br /> Care,On Your Terms
            </h1>
            <p className="text-secondary mt-5 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              architecto maxime impedit perferendis quisquam sapiente. Magnam
              asperiores, beatae, id quis suscipit officia ullam facilis vitae
              possimus, doloribus saepe! Obcaecati, ad! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos, consectetur non sint
              obcaecati repudiandae ipsa itaque corporis sed voluptas quos
              debitis enim ut, nisi et possimus! Repellat sed quam quibusdam.
            </p>
            <button
              style={{
                backgroundColor: "#16D2C3",
                width: "8em",
                height: "2.5em",
                border: "none",
              }}
              className="btn btn-primary mt-5 "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
