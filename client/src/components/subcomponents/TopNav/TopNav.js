import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import DefaultIcon from "../../../Icons/Profile.svg";
import Input from "../Inputs/Input";
import SearchResult from "../SearchResult/SearchResult";
import Style from "./TopNav.module.scss";

const TopNav = (props) => {
  const Result = useRef();
  const [userName, setuserName] = useState("Please Log In");
  const [profile, setProfile] = useState(DefaultIcon);
  const [Navigate, setNavigate] = useState("/");
  const [ResultsModal, setResultsModal] = useState(false);
  const [ResultData, setResultData] = useState("");
  // const NavigatelOC = useLocation();
  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  const Search = () => {
    if (Result.current.value === "") {
      setResultsModal(false);
    } else {
      setResultsModal(true);
      setResultData(Result.current.value);
    }
  };

  const clearInput = useLocation();

  useEffect(() => {
    if (clearInput.pathname === "/IndividualQuestion") {
      setResultsModal(false);
    }
  }, []);

  useEffect(() => {
    if (
      seshStorage === "undefined" ||
      seshStorage === null ||
      seshStorage === ""
    ) {
      // setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile}`);
      setNavigate("/");
    } else {
      setNavigate("/Profile");
      setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile}`);
      setuserName(seshStorage.username);
    }
  }, []);

  return (
    <div className={props.show ? Style.Bounds : "hide"}>
      <div className={props.show ? Style.topNav : "hide"}>
        <div className={Style.LOGO}></div>
        <div className={Style.Results}>
          <SearchResult
            ResultsModal={ResultsModal}
            setResultsModal={setResultsModal}
            ResultData={ResultData}
          />
        </div>
        <Input
          onChange={Search}
          ref={Result}
          className="Search"
          Intype="Search"
        />
        <h4 className={Style.Heading}>{userName}</h4>
        <Link to="/Profile">
          <div
            className={Style.ProfileImage}
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
