import React from "react";
import BookingsCard from "../BookingsCard/BookingsCard";

const bookingsData = [
  {
    id: 1,
    subject: "Teeth Orthodontics ",
    visitngHour: "8:00AM - 9:00AM",
    totalSpace: "10 space Available",
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry ",
    visitngHour: "10:05AM - 11:30AM",
    totalSpace: "10 space Available",
  },
  {
    id: 3,
    subject: "Teeth Cleaning ",
    visitngHour: "5:00pM - 6.30pM",
    totalSpace: "10 space Available",
  },
  {
    id: 4,
    subject: "Cavity Protection ",
    visitngHour: "7:00AM - 8:30AM",
    totalSpace: "10 space Available",
  },
  {
    id: 5,
    subject: "Teeth Orthodontics ",
    visitngHour: "8AM - 9AM",
    totalSpace: "10 space Available",
  },
  {
    id: 6,
    subject: "Teeth Orthodontics ",
    visitngHour: "8AM - 9AM",
    totalSpace: "10 space Availabl",
  },
];

const BookAppointment = ({ selectDate }) => {
  return (
    <section className="mt-4">
      <h1 style={{ color: " #1cc7c1" }} className="text-center text-brands">
        Available Appointments on {selectDate.toDateString()}{" "}
      </h1>
      <div className="row mt-5 w-100">
        {bookingsData.map((booking) => (
          <BookingsCard booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
