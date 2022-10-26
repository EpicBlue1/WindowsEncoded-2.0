import { default as axios, default as Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Badges from "../../subcomponents/Badges/Badges";
import BagdeOne from "../../subcomponents/Badges/BagdeOne";
import BadgeTwo from "../../subcomponents/Badges/BadgeTwo";
import BadgeThree from "../../subcomponents/Badges/BadgeThree";

import ProfileQuestion from "../../subcomponents/ProfileQuestion/ProfileQuestion";
import ProfileSection from "../../subcomponents/ProfileSection/ProfileSection";
import Style from "./Profile.module.scss";

const Profile = (props) => {
  const [ProfileData, setProfileData] = useState();
  const [ProfileQuestions, setProfileQuestions] = useState();
  const [updateRender, setUpdateRender] = useState(false);

  const Navigate = useNavigate();
  const [Busy, setBusy] = useState(true);

  useEffect(() => {
    const USER = sessionStorage.getItem("UserData");
    let user = JSON.parse(USER);
    if (USER === "" || USER === null || USER === undefined || USER === false) {
      Navigate("/LogNReg");
    } else if (USER) {
      // Navigate("/");
      setBusy(false);
      let UserId = user._id;

      axios.get("http://localhost:2000/api/allQuestions").then((res) => {

        let data = res.data;
        let render = setProfileQuestions(
          data
          .filter((filterData) => UserId === filterData.userId)
          // TODO: Rerender after editing
          .map((Ques) => <ProfileQuestion key={Ques._id} alldata={Ques} updateRender={updateRender}
          setUpdateRender={setUpdateRender}/>)
        );
      });
    }
  }, [updateRender]);


  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));
  console.log(seshStorage);

  let score = seshStorage.score;


    
    let badgeOne = <BagdeOne/>
    let badgeoneCheck = false;

    let badgeTwo = <BadgeTwo/>
    let badgeTwoCheck = false;

    let badgeThree = <BadgeThree/>
    let badgeThreeCheck = false;

    // add badge for asking 1 question
    // add badge for 5 question
    // add nbadge for one asnwer
    // badge based om tags 


    if(score <= 50) {
      badgeoneCheck = true;
      badgeTwoCheck = false;
      badgeThreeCheck = false;
    } else if (score <= 70) {
      badgeoneCheck = true;
      badgeTwoCheck = true;
      badgeThreeCheck = false;
    } else if (score <= 100) {
      badgeoneCheck = true;
      badgeTwoCheck = true;
      badgeThreeCheck = true;
    }

  return Busy ? null : (
    <div className={Style.body}>
      <h1>Badges to achive</h1>
      <div className={Style.BadgeSection}>
    
      
        {badgeoneCheck == true ? badgeOne: ""}
        {badgeTwoCheck == true ? badgeTwo: ""}
        {badgeThreeCheck == true ? badgeThree: ""}

        
      </div>
      <br></br>
      <h1>YOUR ACTIVITY</h1>
      <div className={Style.QuestionSection}>
        {ProfileQuestions}
        {/* {console.log(ProfileQuestions)} */}
      </div>
      <div className={Style.ProfileSection}>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
