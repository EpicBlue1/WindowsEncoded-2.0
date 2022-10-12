import React from "react";
import Style from "./Landing.module.scss";

const Landing = () => {
  const UserData = JSON.parse(sessionStorage.getItem("UserData"))

  console.log(UserData)


  return (
    <div className={Style.body}>
      <div className={Style.LandingArea}>
        <div className={Style.Block}></div>
        <div className={Style.LanContent}>
          <h2 className={Style.heading}>HELLO, {UserData.username}!</h2>
          <p className={Style.Paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to...s
          </p>
        </div>
      </div>

      <h1 className={Style.Heading}>About Us</h1>

      <div className={Style.Row}>
        <div className={Style.Container}>
          <h2 className={Style.text}>Ask Questions</h2>
        </div>
        <div className={Style.Container}>
          <h2>Answer Questions</h2>
        </div>
        <div className={Style.Container2}>
          <h2>Earn Badges</h2>
          <div className={Style.badge}></div>
        </div>
      </div>

      <h1 className={Style.Heading}>CATEGORIES/TAGS</h1>

      <div className={Style.Row}>
        <div className={Style.Container}>
          <div className={Style.ImageOne}></div>
          <h2>HTML</h2>
        </div>
        <div className={Style.Container}>
          <div className={Style.ImageTwo}></div>
          <h2>Javascript</h2>
        </div>
        <div className={Style.Container}>
          <div className={Style.ImageThree}></div>
          <h2>React</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
