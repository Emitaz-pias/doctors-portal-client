import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectDate(date);
  };
  return (
    <section className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-5">
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-4"></div>
    </section>
  );
};

export default Dashboard;
