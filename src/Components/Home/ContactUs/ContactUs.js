import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="contactUs">
      <div className="container">
        <div>
          <h5
            style={{
              color: " #14D1D0",
            }}
            className="text-center pt-5 fw-bold "
          >
            CONTACT US
          </h5>
          <h1 className="text-center text-white">Always Connect With Us</h1>
        </div>
        <div className="mt-5 pt-5 d-flex justify-content-center">
          <div className="w-50">
            <form action="">
              <input
                type="text"
                class="form-control form-control-lg form mb-3"
                id="exampleFormControlInput1"
                placeholder="Email Address *"
              />

              <input
                type="text"
                class="form-control  form-control-lg mb-3"
                id="exampleFormControlInput1"
                placeholder="Subject *"
              />

              <textarea
                class="form-control  form-control-lg mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Message *"
              ></textarea>
              <div className="d-flex justify-content-center mt-3">
                <input
                  style={{
                    backgroundColor: "#14D1D0",
                    color: " white",
                    height: "3em",
                    width: "10em",
                  }}
                  type="submit"
                  value="Submit"
                  className="btn fw-bold text-uppercase"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
