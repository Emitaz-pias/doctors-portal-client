import React from "react";
import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AppointmentHeader from "./AppointmentHeader/AppointmentHeader";

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };
  return (
    <section>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <Footer />
    </section>
  );
};

export default Appointment;
