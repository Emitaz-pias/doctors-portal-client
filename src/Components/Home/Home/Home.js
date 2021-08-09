import React from "react";
import Appoinment from "../Appointment/Appoinment";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors";
import Exceptional from "../Exceptional/Exceptional";
import Footer from "../Footer/Footer";
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
