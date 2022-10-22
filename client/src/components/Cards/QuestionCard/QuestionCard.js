import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let navigate = useNavigate();

  const [Voting, setVoting] = useState();

  const viewQuestion = () => {
    sessionStorage.setItem("questionId", props.productId);
    navigate("/IndividualQuestion", { state: { allData: props.allData } });
  };

  const UADVote = () => {
    let upCount = 10;
    let downCount = 10;

    //convert 50 to 70
    upCount = upCount * 1.4;

    //convert 50 to 30
    downCount = downCount * 0.6;

    let total = upCount - downCount;

    let downPercentage = 0;

    //make sure the smallest number is divided
    if (downCount < upCount) {
      //percentage of downvotes to calculate percentage of upvotes
      downPercentage = (downCount / upCount) * 100;
    } else {
      downPercentage = (upCount / downCount) * 100;
    }
  };

  return (
    <div className={Style.QuestionCard} onClick={viewQuestion}>
      <div className={Style.Left}>
        <div className={Style.profileImg}></div>
        <p className={Style.username}>{props.username}</p>

        <br />

        <h2 className={Style.heading}>{props.questionTitle}</h2>

        <div className={Style.tag}>CSS</div>
        <div className={Style.tag}>JavaScript</div>

        <br />
        <br />

        <p className={Style.questionDescription}>{props.questionDescription}</p>
      </div>
      <div className={Style.Right}>
        <div
          className={Style.Gradient}
          style={{
            background: `linear-gradient(
              0deg,
              rgba(253, 30, 74, 1) 30%,
              rgba(0, 200, 145, 1) 70%
            )`,
          }}
        >
          <div className={Style.Upvote}></div>
          <div className={Style.circle}>0</div>
          <div className={Style.Downvote}></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
