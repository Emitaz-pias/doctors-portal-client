import React from "react";

const TestimonialDetails = ({ testimonials }) => {
  return (
    <div className="col-md-3 ps-5 ms-5">
      <div class="card text-center" style={{ width: "22rem", height: "22rem" }}>
        <div class="card-body">
          <p class="card-text text-secondary">{testimonials.qoute}</p>
          <div className="d-flex justify-content-around align-items-center mt-5 pt-5">
            <img src={testimonials.img} alt="" className="fluid" />
            <div className="">
              <h6 style={{ color: " #1cc7c1" }} className="card-title fw-bold">
                {testimonials.name}
              </h6>
              <small>{testimonials.from}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
