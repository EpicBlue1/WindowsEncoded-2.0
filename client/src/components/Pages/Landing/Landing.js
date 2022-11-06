import React, { useEffect, useState } from "react";
import Style from "./Landing.module.scss";

const Landing = () => {
  const [displayText, setDisplayText] = useState();
  const [profile, setProfile] = useState();
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
      setProfile(`http://localhost:2000/ProfileImages/${seshStorage.profile}`);
    }
  }, []);

  return (
    <div className={Style.body}>
      <div className={Style.LandingArea}>
        <div
          className={Style.Block}
          style={{ backgroundImage: `url(${profile})` }}
        ></div>
        <div className={Style.LanContent}>
          <h2 className={Style.heading}>Hello, {displayText}!</h2>
          <p className={Style.Paragraph}>
            <h3>Welcome to windows Encoded</h3>
            The best online platfrom from dev students for dev students! Ask any
            and answer development related questions.
            <br />
            <br />
            Play fair, help out fellow developers, upvote and downvote, earn and
            display your badges on your profile
            <br />
            If you are top rated you may even get the status of being an admin !
          </p>
        </div>
      </div>
      <br></br>

      <hr className={Style.Line}></hr>

      <h1 className={Style.Heading}>For you</h1>

      <div className={Style.Row}>
        <div className={`${Style.Container} ${Style.ContainerImageOne}`}>
          <h2 className={Style.text}>Ask Questions</h2>
        </div>

        <div className={`${Style.Container} ${Style.ContainerImageTwo}`}>

          <h2>Answer Questions</h2>
        </div>
        <div className={`${Style.Container} ${Style.ContainerImageThree}`}>
          <h2>Earn Badges</h2>
          <div className={Style.badge}></div>
        </div>
      </div>
      <br></br>

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
      <br></br>
    </div>
  );
};

export default Landing;
