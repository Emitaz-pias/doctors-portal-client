import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="row w-75">
      <div className="col-md-4 offset-md-1">
        <h1>Appointment</h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="fluid"></img>
      </div>
    </main>
  );
};

export default AppointmentHeader;
