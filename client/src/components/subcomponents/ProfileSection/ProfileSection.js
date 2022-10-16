import { Axios } from "axios";
import { Circle, Line } from "rc-progress";
import React, { useEffect, useState } from "react";
import Logo from "../../../Icons/Profile.svg";

import { useNavigate } from "react-router-dom";
import EditProfile from "../Edit Profile/EditProfile";
import ProgressBar from "../ProgressBar/ProgressBar";
import Style from "./ProfileSection.module.scss";

const ProfileSection = (props) => {
  const [EditProfileModal, setEditProfileModal] = useState();
  const [displayText, setDisplayText] = useState();
  const [modalArea, setModal] = useState();
  const [profile, setProfile] = useState(Logo);
  const [userData, setuserData] = useState();
  const [userName, setUserName] = useState("No User");
  const Navigate = useNavigate();

  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  useEffect(() => {
    if (
      seshStorage === "" ||
      seshStorage === null ||
      seshStorage === undefined ||
      seshStorage === false
    ) {
      Navigate("/");
    } else if (!seshStorage) {
      Navigate("/");
    }
  }, []);

  useEffect(() => {
    if (
      seshStorage === "undefined" ||
      seshStorage === null ||
      seshStorage === ""
    ) {
      Navigate("/");
    } else {
      setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile}`);
      setuserData(seshStorage);
      setUserName(seshStorage.username);
      console.log(seshStorage);
    }
  }, []);

  // const EditProfile = () => {
  //     let user = sessionStorage.getItem('UserData');

  //     console.log(user)

  //         // setEditProfileModal(<AddQuestion rerender={setAddQuestionModal}/>)

  // }
  //   const UserData = JSON.parse(sessionStorage.getItem("UserData"));

  //   console.log(UserData);

  //   const edit = () => {
  //     setModal(
  //       <EditProfile
  //         close={setModal}
  //         username={UserData.username}
  //         email={UserData.email}
  //         password={UserData.password}
  //         profile={UserData.profile}
  //       />
  //     );
  //   };

 

  return (
    <>
      {modalArea}

      <div className={Style.MainProfileSection}>
        <div className={Style.EditButton}></div>

        <div className={Style.ProfileImages}>
          <div
            className={Style.ProfileImage}
            style={{
              backgroundImage: `url(${profile})`,
              backgroundColor: `white`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
          ></div>
          <div className={Style.ProfileDisplayBadge}></div>
        </div>

        <h2 className={Style.Username}>{userName}</h2>
        {/* <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" /> */}

        <h3 className={Style.MemberLength}>Member for 1 year, 2 months</h3>
        {/* <ProgressBar/> */}
        <div className={Style.Progress}>
          {" "}
          {/* <h1>Score: {UserData.score}</h1>{" "} */}
        </div>

        <div className={Style.TotalAsked}>
          <h2 className={Style.Scores}>1</h2>
          <h3 className={Style.ScoreText}>Questions Asked</h3>
        </div>

        <div className={Style.TotalAnswered}>
          <h2 className={Style.Scores}>1</h2>
          <h3 className={Style.ScoreText}>Questions Answered</h3>
        </div>

        <div className={Style.ReliabilityScore}>
          <h2 className={Style.Scores}>1</h2>
          <h3 className={Style.ScoreText}>Reliability Score</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
