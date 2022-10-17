import React, { useEffect, useState } from "react";
import Style from "./Landing.module.scss";

const Landing = () => {
  const [displayText, setDisplayText] = useState();
  const [ForYou, setForYou] = useState();

  useEffect(() => {
    let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));
    if (
      seshStorage === "undefined" ||
      seshStorage === null ||
      seshStorage === ""
    ) {
      console.log("nee tjommie");
      setForYou("About us");
      setDisplayText("User");
    } else {
      console.log(seshStorage.username);
      setDisplayText(seshStorage.username);
    }
  }, []);

  return (
    <div className={Style.body}>
      <div className={Style.LandingArea}>
        <div className={Style.Block}></div>
        <div className={Style.LanContent}>
          <h2 className={Style.heading}>HELLO, {displayText}!</h2>
          <p className={Style.Paragraph}>
            <h3>Welcome to windows Encoded</h3>
            <br />
            An online platfrom where students of open window can ask and answer
            development related questions regarding their majors or modules
            <br />
            You aswell as fellow students are able ask and rate quesitons, you
            are able to earn and display your badges on your profile
            <br />
            If you are top rated you may even get the status of being an admin !
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to...s */}
          </p>
        </div>
      </div>
      <br></br>

      <hr className={Style.Line}></hr>

      <h1 className={Style.Heading}>For you</h1>

      <div className={Style.Row}>
        <div className={Style.Container}>
          <h2 className={Style.text}>Ask Questions</h2>
        </div>
        <div className={Style.Container}>
          <h2>Answer Questions</h2>
        </div>
        <div className={Style.Container}>
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
