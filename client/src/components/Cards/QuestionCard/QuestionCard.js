import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let navigate = useNavigate();

  const viewQuestion = () => {
    sessionStorage.setItem("questionId", props.productId);
    navigate("/IndividualQuestion", { state: { allData: props.allData } });
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
          <div className={Style.circle}>10</div>
          <div className={Style.Downvote}></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
