import { default as axios, default as Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BagdeOne from "../../subcomponents/Badges/BagdeOne";
import BadgeTwo from "../../subcomponents/Badges/BadgeTwo";
import BadgeThree from "../../subcomponents/Badges/BadgeThree";

import ProfileQuestion from "../../subcomponents/ProfileQuestion/ProfileQuestion";
import ProfileSection from "../../subcomponents/ProfileSection/ProfileSection";
import Style from "./Profile.module.scss";
import FirstQuestionBadge from "../../subcomponents/Badges/FirstQuestionBadge";
import FiveQuestionsBadge from "../../subcomponents/Badges/FiveQuestionsBadge";
// import TenQuestionsBadge from "../../subcomponents/Badges/TenQuestionsBadge";


const Profile = (props) => {
  const [ProfileData, setProfileData] = useState();
  const [ProfileQuestions, setProfileQuestions] = useState();
  const [updateRender, setUpdateRender] = useState(false);

  const [AskedQuestions, setAskedQuestions] = useState();

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


  useEffect(() => {
    axios.get("http://localhost:2000/api/allQuestions")
    .then((res) => {
      let data = res.data;
        let Qasked = 
        (data.filter((filterData)=> 
        seshStorage._id === filterData.userId))
        setAskedQuestions(Qasked.length)
        console.log(Qasked);
    });
  }, []);

  console.log(AskedQuestions);

  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));
  console.log(seshStorage);

  let score = seshStorage.score;

   
    
    let badgeOne = <BagdeOne/>
    let badgeoneCheck = false;

    let badgeTwo = <BadgeTwo/>
    let badgeTwoCheck = false;

    let badgeThree = <BadgeThree/>
    let badgeThreeCheck = false;

    let OneQuestionAsked = <FirstQuestionBadge/>
    let OneQuestionAskedCheck = false;

    let fiveQuestionsBadge = <FiveQuestionsBadge/>;
    let fiveQuestionsBadgeCheck = false;

    // let TenQuestionsBadge = <TenQuestionsBadge/>;
    // let TenQuestionsBadgeCheck = false;

    // let FiftyQuestionsBadge = <FiftyQuestionsBadge/>;
    // let FiftyQuestionsBadgeCheck = false;


    if(AskedQuestions === 1){
      OneQuestionAskedCheck = true;
      fiveQuestionsBadgeCheck = false;
      // TenQuestionsBadgeCheck = false
      // FiftyQuestionsBadgeCheck = false
    }  else if (AskedQuestions >= 5) {
      OneQuestionAskedCheck = true;
      fiveQuestionsBadgeCheck = true;
      // TenQuestionsBadgeCheck = false
      // FiftyQuestionsBadgeCheck = false
    } 
    // else if (AskedQuestions >= 10) {
    //   OneQuestionAskedCheck = true;
    //   fiveQuestionsBadgeCheck = true;
    //   // TenQuestionsBadgeCheck = true
    //   // FiftyQuestionsBadgeCheck = false
    // } else if (AskedQuestions >= 50) {
    //   OneQuestionAskedCheck = true;
    //   fiveQuestionsBadgeCheck = true;
    //   // TenQuestionsBadgeCheck = true
    //   // FiftyQuestionsBadgeCheck = true
    // }
    
   


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
        {OneQuestionAskedCheck == true ? OneQuestionAsked: ""}
        {fiveQuestionsBadgeCheck == true ? fiveQuestionsBadge: ""}
        {/* {TenQuestionsBadgeCheck == true ? TenQuestionsBadge: ""} */}
        {/* {FiftyQuestionsBadgeCheck == true ? FiftyQuestionsBadge: ""} */}




        
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
