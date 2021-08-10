import React from "react";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectDate(date);
  };
  return (
    <section>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment selectDate={selectDate} />
      <Footer />
    </section>
  );
};

export default Appointment;
