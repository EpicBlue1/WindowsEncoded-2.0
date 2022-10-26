import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../../../Icons/Profile.svg";

import { useNavigate } from "react-router-dom";
import EditProfile from "../Edit Profile/EditProfile";
import ProgressBar from "../ProgressBar/ProgressBar";
import Style from "./ProfileSection.module.scss";
import ProfileQuestion from "../ProfileQuestion/ProfileQuestion";

//badges
import bronze from "../../../Img/Bronze.png";
import silver from "../../../Img/Silver.png";
import gold from "../../../Img/Gold.png";


const ProfileSection = (props) => {
  const [EditProfileModal, setEditProfileModal] = useState();
  const [displayText, setDisplayText] = useState();
  const [editModal, setEditModal] = useState();
  const [profile, setProfile] = useState(Logo);
  const [userData, setuserData] = useState();
  const [userName, setUserName] = useState("No User");
  const [QuestionCount, setQuestionCount] = useState();
  const [profileBadge, setprofileBadge] = useState();
  const Navigate = useNavigate();

  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));


  const edit = () => {
    setEditModal(
      <EditProfile
        close={setEditModal}
        rerender={setEditModal}
        username={seshStorage.username}
        email={seshStorage.email}
        password={seshStorage.password}
        profile={seshStorage.profile}
        updateRender={props.updateRender}
        setUpdateRender={props.setUpdateRender}
      />
    );
  };
 

  useEffect(() => {

    const badges = {
      bronze: bronze,
      silver: silver,
      gold: gold,
    };

    let score = seshStorage.score;

    console.log(score)

    if(score >= 10 && score <= 50) {
      setprofileBadge(badges.bronze)

    } else if (score <= 100) {
      setprofileBadge(badges.silver)
    } else if (score <= 150) {
      setprofileBadge(badges.gold)
    }
  });



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
    }
  }, []);



  useEffect(() => {
    axios.get("http://localhost:2000/api/allQuestions")
    .then((res) => {
      let data = res.data;
        let render = 
        (data.filter((filterData)=> 
        seshStorage._id === filterData.userId))
        setQuestionCount(render.length)
    });
  }, []);



  // const deleteProfile = () => {

  // };
  return (
    <>
      {editModal}

      <div className={Style.MainProfileSection}>
        <div className={Style.EditButton} onClick={edit}></div>

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
          <div className={Style.ProfileDisplayBadge}>
            <img className={Style.badgee} src={profileBadge} />
            
          </div>
        </div>

        <h2 className={Style.Username}>{userName}</h2>
        {/* <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" /> */}
        <ProgressBar/>
        <h3 className={Style.MemberLength}>Member for 1 year, 2 months</h3>
        
        

        <div className={Style.TotalAsked}>
          <h2 className={Style.Scores}>{QuestionCount}</h2>
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
