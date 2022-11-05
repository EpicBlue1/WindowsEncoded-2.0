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
import TenQuestionsBadge from "../../subcomponents/Badges/TenQuestionsBadge";
import FiftyAsked from "../../subcomponents/Badges/FiftyAsked";
import OneAswered from "../../subcomponents/Badges/OneAswered";
import FiveAswered from "../../subcomponents/Badges/FiveAswered";
import TenAswered from "../../subcomponents/Badges/TenAswered";
import FiftyAnswered from "../../subcomponents/Badges/FiftyAnswered";

const Profile = (props) => {
  const [ProfileData, setProfileData] = useState();
  const [ProfileQuestions, setProfileQuestions] = useState();
  const [updateRender, setUpdateRender] = useState(false);

  const [AskedQuestions, setAskedQuestions] = useState();
  const [AnsweredQeusitons, setAnsweredQeusitons] = useState();

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
            .map((Ques) => (
              <ProfileQuestion
                key={Ques._id}
                alldata={Ques}
                updateRender={updateRender}
                setUpdateRender={setUpdateRender}
              />
            ))
        );
        let Qasked = data.filter(
          (filterData) => seshStorage._id === filterData.userId
        );
        setAskedQuestions(Qasked.length);
        console.log(Qasked);
      });
    }
  }, [updateRender]);

  useEffect(() => {
    axios.get("http://localhost:2000/api/allAnswers").then((res) => {
      let data = res.data;
      console.log(data);
      let Qanswered = data.filter(
        (filterData) => seshStorage._id === filterData.userId
      );
      setAnsweredQeusitons(Qanswered.length);
      console.log(Qanswered);
    });
  }, []);

  console.log(AnsweredQeusitons);

  // useEffect(() => {
  //   axios.get("http://localhost:2000/api/allQuestions")
  //   .then((res) => {
  //     let data = res.data;
  //       let Qasked =
  //       (data.filter((filterData)=>
  //       seshStorage._id === filterData.userId))
  //       setAskedQuestions(Qasked.length)
  //       console.log(Qasked);
  //   });
  // }, []);

  console.log(AskedQuestions);

  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));
  console.log(seshStorage);

  let score = seshStorage.score;

  let badgeOne = <BagdeOne />;
  let badgeoneCheck = false;

  let badgeTwo = <BadgeTwo />;
  let badgeTwoCheck = false;

  let badgeThree = <BadgeThree />;
  let badgeThreeCheck = false;

  let OneQuestionAsked = <FirstQuestionBadge />;
  let OneQuestionAskedCheck = false;

  let fiveQuestionsBadge = <FiveQuestionsBadge />;
  let fiveQuestionsBadgeCheck = false;

  let TenQuestionBadge = <TenQuestionsBadge />;
  let TenQuestionBadgeCheck = false;

  let FiftyQuestionBadge = <FiftyAsked />;
  let FiftyQuestionBadgeCheck = false;

  let OneAnswerBadge = <OneAswered />;
  let OneAnswerBadgeCheck = false;

  let FiveAnswerBadge = <FiveAswered />;
  let FiveAnswerBadgeCheck = false;

  let TenAnswerBadge = <TenAswered />;
  let TenAnswerBadgeCheck = false;

  let FiftyAnswerbadge = <FiftyAnswered />;
  let FiftyAnswerbadgeCheck = false;

  //ANSWERED QUEATIONS BADGES
  if (AnsweredQeusitons >= 1) {
    OneAnswerBadgeCheck = true;
    FiveAnswerBadgeCheck = false;
    TenAnswerBadgeCheck = false;
    FiftyAnswerbadgeCheck = false;
  } else if (AnsweredQeusitons >= 2) {
    OneAnswerBadgeCheck = true;
    FiveAnswerBadgeCheck = true;
    TenAnswerBadgeCheck = false;
    FiftyAnswerbadgeCheck = false;
  } else if (AnsweredQeusitons >= 10) {
    OneAnswerBadgeCheck = true;
    FiveAnswerBadgeCheck = true;
    TenAnswerBadgeCheck = true;
    FiftyAnswerbadgeCheck = false;
  } else if (AnsweredQeusitons >= 50) {
    OneAnswerBadgeCheck = true;
    FiveAnswerBadgeCheck = true;
    TenAnswerBadgeCheck = true;
    FiftyAnswerbadgeCheck = true;
  }

  //ASKED QUEATIONS BADGES
  if (AnsweredQeusitons >= 1) {
    OneQuestionAskedCheck = true;
    fiveQuestionsBadgeCheck = false;
    TenQuestionBadgeCheck = false;
    FiftyQuestionBadgeCheck = false;
  } else if (AnsweredQeusitons >= 5) {
    OneQuestionAskedCheck = true;
    fiveQuestionsBadgeCheck = true;
    TenQuestionBadgeCheck = false;
    FiftyQuestionBadgeCheck = false;
  } else if (AnsweredQeusitons >= 10) {
    OneQuestionAskedCheck = true;
    fiveQuestionsBadgeCheck = true;
    TenQuestionBadgeCheck = true;
    FiftyQuestionBadgeCheck = false;
  } else if (AnsweredQeusitons >= 50) {
    OneQuestionAskedCheck = true;
    fiveQuestionsBadgeCheck = true;
    TenQuestionBadgeCheck = true;
    FiftyQuestionBadgeCheck = true;
  }

  if (score >= 5) {
    badgeoneCheck = true;
    badgeTwoCheck = false;
    badgeThreeCheck = false;
  } else if (score >= 15) {
    badgeoneCheck = 20;
    badgeTwoCheck = true;
    badgeThreeCheck = false;
  } else if (score >= 50) {
    badgeoneCheck = true;
    badgeTwoCheck = true;
    badgeThreeCheck = true;
  }

  return Busy ? null : (
    <div className={Style.body}>
      <h1>Badges to achive</h1>
      <div className={Style.BadgeSection}>
        {badgeoneCheck === true ? badgeOne : ""}
        {badgeTwoCheck === true ? badgeTwo : ""}
        {badgeThreeCheck === true ? badgeThree : ""}
        {OneQuestionAskedCheck === true ? OneQuestionAsked : ""}
        {fiveQuestionsBadgeCheck === true ? fiveQuestionsBadge : ""}
        {TenQuestionBadgeCheck === true ? TenQuestionBadge : ""}
        {FiftyQuestionBadgeCheck === true ? FiftyQuestionBadge : ""}
        {OneAnswerBadgeCheck === true ? OneAnswerBadge : ""}
        {FiveAnswerBadgeCheck === true ? FiveAnswerBadge : ""}
        {TenAnswerBadgeCheck === true ? TenAnswerBadge : ""}
        {FiveAnswerBadgeCheck === true ? FiveAnswerBadge : ""}
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
