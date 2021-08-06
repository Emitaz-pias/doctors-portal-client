import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.css";

const InfoCard = ({ info }) => {
  return (
    <div className={"col-md-4 info-card mt-3"}>
      <div
        className={`d-flex justify-content-center align-items-center info-${info.background} info-container  `}
      >
        <div className="me-3">
          <FontAwesomeIcon size="3x" icon={info.icon}></FontAwesomeIcon>
        </div>
        <div className="me-5">
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
