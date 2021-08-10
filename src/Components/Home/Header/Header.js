import React from "react";
import BuisnessInfo from "../BuisnessInfo/BuisnessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Navbar />
      <HeaderMain />
      <BuisnessInfo />
    </div>
  );
};

export default Header;
