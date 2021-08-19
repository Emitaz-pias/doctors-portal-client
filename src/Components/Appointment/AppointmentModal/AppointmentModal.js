import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentModal = ({ modalIsOpen, closeModal, bookingName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const appointmentData = data;
    fetch(`http://localhost:5000/addAppointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === true) {
          closeModal();
          alert("appointment created successfully");
        }
      });
  };
  console.log(errors);

  return (
    <div className="modal-dialog modal-dialog-centered">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: " #1cc7c1" }} classname="text-center">
          {bookingName}
        </h2>

        <form classname="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              classname="form-control"
              type="time"
              placeholder="Select Time"
              {...register("Time", { required: true, maxLength: 80 })}
            />
            <br />
            {errors.Time && <span className="text-danger">Please enter</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
              {...register("Name", { required: true, maxLength: 100 })}
            />
            <br />
            {errors.Name && <span className="text-danger">Please enter</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile number"
              {...register("Mobile", { required: true, maxLength: 12 })}
            />
            <br />
            {errors.Mobile && <span className="text-danger">Please enter</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              type="datetime"
              className="form-control"
              placeholder="mm/dd/yy"
              {...register("date", { required: true })}
            />
            <br />
            {errors.date && <span className="text-danger">Please enter</span>}
          </div>

          <br />
          <div className="form-group">
            <input className="customBtn" type="submit" value="send " />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
