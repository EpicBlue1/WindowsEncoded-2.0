import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "../CheckBox/CheckBox";
import Style from "./LeftNav.module.scss";

const LeftNav = (props) => {
  return (
  <div className={props.show? Style.Bounds : "hide"}>
    <div className={Style.leftNav}>

    <Link to="/">
      <div className={Style.Home}>
        <div className={Style.IconSpot1}></div>
        <h3 className={Style.homeText}>Home</h3>
      </div>
    </Link>

    <Link to="/Questions">
      <div className={Style.Questions}>
        <div className={Style.IconSpot2}></div>
        <h3 className={Style.text}>Questions</h3>
      </div>
    </Link>

    <div className={Style.Topics}>
      <h2>Topics</h2>
      <CheckBox />
      <CheckBox />
      <CheckBox />
      <CheckBox />
    </div>

    <Link to="/LogNReg">
      <div className={Style.Logout}>
          <div className={Style.LogImg}></div>
          <h3 onClick={() => {props.setShowNav(false)}} className={Style.LogoutText}>Logout</h3>
      </div>
    </Link>
    </div>
  </div>
  );
};

export default LeftNav;
