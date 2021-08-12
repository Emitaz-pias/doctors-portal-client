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
          <input
            classname="form-control"
            type="time"
            placeholder="Select Time"
            {...register("Select Time", { required: true, maxLength: 80 })}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Your Name"
            {...register("Your Name", { required: true, maxLength: 100 })}
          />{" "}
          <br />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", { required: true, maxLength: 12 })}
          />{" "}
          <br />
          <input
            type="datetime"
            placeholder="mm/dd/yy"
            {...register("mm/dd/yy", { required: true })}
          />
          <br />
          <input onClick={closeModal} type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
