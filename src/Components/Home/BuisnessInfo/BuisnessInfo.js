import React from "react";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import InfoCard from "../InfoCard/InfoCard";

const infoData = [
  {
    title: "Opening Hours",
    description: " We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Broklyn NY 1003 ,USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+1340975825874",
    icon: faPhone,
    background: "primary",
  },
];

const BuisnessInfo = () => {
  return (
    <section className=" d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BuisnessInfo;
