import React, { useEffect, useLocation, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Icons/Profile.svg";
import Input from "../Inputs/Input";
import Style from "./TopNav.module.scss";

const TopNav = (props) => {
  const [userName, setuserName] = useState("Please Log In");
  const [profile, setProfile] = useState(Logo);
  const [Navigate, setNavigate] = useState("/");
  // const NavigatelOC = useLocation();
  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  useEffect(() => {
    if (
      seshStorage === "undefined" ||
      seshStorage === null ||
      seshStorage === ""
    ) {
      setProfile(Logo);
      setNavigate("/");
    } else {
      setNavigate("/Profile");
      setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile})`);
      setuserName(seshStorage.username);
    }
  }, []);

  return (
    <div className={props.show ? Style.Bounds : "hide"}>
      <div className={props.show ? Style.topNav : "hide"}>
        <div className={Style.LOGO}></div>
        {/* <Input Intype="Search" className={Style.SearchBar}/> */}
        <Input className="Search" Intype="Search" />
        <h4 className={Style.Heading}>{userName}</h4>
        <Link to="/Profile">
          <div
            className={Style.ProfileImage}
            style={{
              backgroundImage: `url(${profile})`,
            }}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
