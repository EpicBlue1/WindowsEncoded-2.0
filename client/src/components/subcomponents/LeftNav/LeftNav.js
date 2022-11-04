import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CheckBox from "../CheckBox/CheckBox";
import Style from "./LeftNav.module.scss";

const LeftNav = (props) => {
  const [logOut, setlogOut] = useState("Log In");
  // const [profile, setProfile] = useState(Logo);
  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  useEffect(() => {
    if (
      seshStorage === "undefined" ||
      seshStorage === null ||
      seshStorage === ""
    ) {
      console.log("nee tjommie");
    } else {
      // setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile})`);
      setlogOut("Log Out");
    }
  }, [seshStorage]);

  return (
    <div className={props.show ? Style.Bounds : "hide"}>
      <div className={Style.leftNav}>
        <br />
        <NavLink to="/" className={Style.Home} activeClassName={Style.active}>
          <div className={Style.IconSpot1}></div>
          <h3 className={Style.homeText}>Home</h3>
        </NavLink>

        <NavLink to="/Questions" className={Style.Questions}>
          <div className={Style.IconSpot2}></div>
          <h3 className={Style.text}>Questions</h3>
        </NavLink>

        <div className={Style.Topics}>
          <h2>Topics</h2>
          <CheckBox text="Javascript" />
          <CheckBox text="React" />
          <CheckBox text="Html" />
          <CheckBox text="Css" />
        </div>

        <NavLink to="/LogNReg">
          <div className={Style.Logout}>
            <div className={Style.LogImg}></div>
            <h3
              onClick={() => {
                sessionStorage.removeItem("UserData");
              }}
              className={Style.LogoutText}
            >
              {logOut}
            </h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
