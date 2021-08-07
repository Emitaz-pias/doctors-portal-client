import React from "react";
import chair from "../../../images/chair.png";
import chairBg from "../../../images/chairbg.png";

const HeaderMain = () => {
  return (
    <main className="row w-75">
      <div className="col-md-4 offset-md-1">
        <h1>
          Your New Smile <br /> Starts Here
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          soluta, ducimus fugiat harum officia amet.
        </p>
        <button
          style={{ backgroundColor: "#16D2C3", border: "none" }}
          className="btn  btn-primary"
        >
          GET APPOINTMENT
        </button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="fluid"></img>
      </div>
    </main>
  );
};

export default HeaderMain;
