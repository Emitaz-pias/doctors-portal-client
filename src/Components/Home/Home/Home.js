import React from "react";
import Appoinment from "../Appointment/Appoinment";
import Blogs from "../Blogs/Blogs";
import Doctors from "../Doctors/Doctors";
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
      <Blogs />
      <Doctors />
    </div>
  );
};

export default Home;
