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





  return Busy ? null : (
    <div className={Style.body}>
      <h1>Badges to achive</h1>
      <div className={Style.BadgeSection}>
    
        {/* <Badges /> */}
        
        <Badges type="BadgeOne" className={Style.bigOne} />
        <Badges type="BadgeTwo"/>
        <Badges type="BadgeThree"/>
        
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
