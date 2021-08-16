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
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: " #1cc7c1" }} classname="text-center">
          {bookingName}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              classname="form-control"
              type="time"
              placeholder="Select Time"
              {...register("Select Time", { required: true, maxLength: 80 })}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
              {...register("Your Name", { required: true, maxLength: 100 })}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile number"
              {...register("Mobile number", { required: true, maxLength: 12 })}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="datetime"
              className="form-control"
              placeholder="mm/dd/yy"
              {...register("mm/dd/yy", { required: true })}
            />
          </div>

          <br />
          <div className="form-group">
            <input onClick={closeModal} type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
