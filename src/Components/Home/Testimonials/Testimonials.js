import React from "react";
import "./Testimonials.css";
import harry from "../../../images/harry.png";
import aliza from "../../../images/aliza.png";
import ema from "../../../images/ema.png";
import TestimonialDetails from "../TestimonialsDetails/TestimonialDetails";
const testimonialsData = [
  {
    qoute:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, deleniti dolore. Sint quibusdam earum aliquam.",
    name: "Wilson Harry",
    from: "California",
    img: harry,
  },
  {
    qoute:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, deleniti dolore. Sint quibusdam earum aliquam.",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    qoute:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, deleniti dolore. Sint quibusdam earum aliquam.",
    name: "Aliza Ferrai",
    from: "San Diago",
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials m-5 ">
      <div className="container ">
        <div className="section-header">
          <h4 style={{ color: "#1cc7c1" }}>Testimonials</h4>
          <h1>
            What Our Patients <br /> Says
          </h1>
        </div>
        <div className="row mt-5 pb-5">
          {testimonialsData.map((testimonials) => (
            <TestimonialDetails
              testimonials={testimonials}
            ></TestimonialDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
