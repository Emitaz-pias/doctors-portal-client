import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors";
import Exceptional from "../Exceptional/Exceptional";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import MakeAppoinment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Exceptional />
      <MakeAppoinment />
      <Testimonials />
      <Blogs />
      <Doctors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
