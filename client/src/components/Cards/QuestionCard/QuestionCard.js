import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let navigate = useNavigate();

  const [UpVote, setUpVote] = useState(0);
  const [DownVote, setDownVote] = useState(0);
  const [Voting, setVoting] = useState(0);
  const [Total, setTotal] = useState(0);

  const [DownPerc, setDownPerc] = useState(50);
  const [UpPerc, setUpPerc] = useState(50);

  const viewQuestion = () => {
    sessionStorage.setItem("questionId", props.productId);
    navigate("/IndividualQuestion", { state: { allData: props.allData } });
  };

  const updateVote = () => {
    //get values
    let upCount = UpVote;
    let downCount = DownVote;

    //default
    let downPercentage = 0;
    let upPercentage = 0;

    //voting is the total downvotes and upvotes summed
    //total is the upvotes minus the downvotes
    downPercentage = (downCount / Voting) * 100;

    upPercentage = (upCount / Voting) * 100;

    //make sure green or red never disappears
    if (downPercentage === 0) {
      downPercentage = downPercentage + 10;
      upPercentage = upPercentage - 10;
    } else if (upPercentage === 0) {
      downPercentage = downPercentage - 10;
      upPercentage = upPercentage + 10;
    }

    setDownPerc(Math.round(downPercentage));
    setUpPerc(Math.round(upPercentage));
  };

  return (
    <div className={Style.QuestionCard}>
      <div onClick={viewQuestion} className={Style.Left}>
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
        <div className={Style.Container}>
          <div
            onClick={() => {
              setDownVote(DownVote + 1);
              setTotal(Total + 1);
              setVoting(Voting + 1);
              updateVote();
            }}
            style={{
              height: `${DownPerc}%`,
            }}
            className={Style.GradientUp}
          ></div>
          <div className={Style.Middle}>{Total}</div>
          <div
            onClick={() => {
              setUpVote(UpVote + 1);
              setTotal(Total - 1);
              setVoting(Voting + 1);
              updateVote();
            }}
            style={{
              height: `${UpPerc}%`,
            }}
            className={Style.GradientDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
