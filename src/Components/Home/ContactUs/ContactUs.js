import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="contactUs">
      <div className="container">
        <div>
          <h5
            style={{
              color: " #1cc7c1",
            }}
            className="text-center pt-5 fw-bold "
          >
            CONTACT US
          </h5>
          <h1 className="text-center text-white">Always Connect With Us</h1>
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
