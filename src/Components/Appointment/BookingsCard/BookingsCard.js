import React from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const BookingsCard = ({ booking, openModal, closeModal }) => {
  return (
    <div className=" col-md-4 mb-3">
      <div class="card p-2 mb-5">
        <div class="card-body  text-center">
          <h5 style={{ color: " #1cc7c1" }} class="card-title text-center">
            {booking.subject}
          </h5>
          <h6 class="text-center mb-2 ">{booking.visitngHour}</h6>
          <p class="text-secondary text-center">{booking.totalSpace}</p>
          <button
            style={{ backgroundColor: " #1cc7c1", color: "white" }}
            className="btn text-uppercase fw-bold"
          >
            Book Appointment
          </button>
          <AppointmentModal openModal={openModal} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;
