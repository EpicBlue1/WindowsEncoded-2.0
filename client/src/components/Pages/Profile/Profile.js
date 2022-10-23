import { default as axios, default as Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Badges from "../../subcomponents/Badges/Badges";
import ProfileQuestion from "../../subcomponents/ProfileQuestion/ProfileQuestion";
import ProfileSection from "../../subcomponents/ProfileSection/ProfileSection";
import Style from "./Profile.module.scss";

const Profile = (props) => {
  const [ProfileData, setProfileData] = useState();
  const [ProfileQuestions, setProfileQuestions] = useState();

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
        console.log(res.data[0].userId);
        console.log(UserId);

        let data = res.data;
        let render = setProfileQuestions(
          data
          .filter((filterData) => UserId === filterData.userId)
          .map((Ques) => <ProfileQuestion alldata={Ques} />)
        );
      });
    }

    setProfileData(user);
    console.log(user);
  }, []);

  return Busy ? null : (
    <div className={Style.body}>
      <h1>BADGES</h1>
      <div className={Style.BadgeSection}>
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
      </div>
      <br></br>
      <h1>YOUR ACTIVITY</h1>
      <div className={Style.QuestionSection}>
        {ProfileQuestions}
        {console.log(ProfileQuestions)}
      </div>
      <div className={Style.ProfileSection}>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
