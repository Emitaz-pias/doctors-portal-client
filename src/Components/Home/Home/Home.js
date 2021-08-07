import React from "react";
import Appoinment from "../Appointment/Appoinment";
import Exceptional from "../Exceptional/Exceptional";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Exceptional />
      <Appoinment />
      <Testimonials />
    </div>
  );
};

export default Home;
