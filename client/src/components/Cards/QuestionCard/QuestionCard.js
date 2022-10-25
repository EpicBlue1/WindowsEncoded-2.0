import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let navigate = useNavigate();

  const [TotalUpVotes, setTotalUpVotes] = useState(props.allData.upvotes);
  const [TotalDownVotes, setTotalDownVotes] = useState(props.allData.downvotes);
  const [Total, setTotal] = useState(10);

  const [DownPerc, setDownPerc] = useState();
  const [UpPerc, setUpPerc] = useState();

  useEffect(() => {
    //default
    let downPercentage = 0;
    let upPercentage = 0;

    setTotal(TotalDownVotes + TotalUpVotes);

    console.log(Total);

    //voting is the total downvotes and upvotes summed
    //total is the upvotes minus the downvotes
    downPercentage = (TotalDownVotes / Total) * 100;

    upPercentage = (TotalUpVotes / Total) * 100;

    console.log(downPercentage, upPercentage);

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
  }, [TotalUpVotes, TotalDownVotes]);

  const updateVote = () => {
    let data = props.allData;

    let productId = data._id;

    let template = {
      userId: data.userId,
      username: data.username,
      questionTitle: data.questionTitle,
      questionDescription: data.questionDescription,
      codeSnippet: data.codeSnippet,
      language: data.language,
      tags: data.tags,
      upvotes: +TotalUpVotes,
      downvotes: +TotalDownVotes,
      score: 10,
      image: data.image,
    };

    axios
      .patch("http://localhost:2000/api/updateVotes/" + productId, template)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const viewQuestion = () => {
    sessionStorage.setItem("questionId", props.productId);
    navigate("/IndividualQuestion", { state: { allData: props.allData } });
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
              setTotalUpVotes(TotalUpVotes + 1);
              // updateVote();
            }}
            style={{
              height: `${UpPerc}%`,
            }}
            className={Style.GradientUp}
          ></div>
          <div className={Style.Middle}>{Total}</div>
          <div
            onClick={() => {
              setTotalDownVotes(TotalDownVotes + 1);
              // updateVote();
            }}
            style={{
              height: `${DownPerc}%`,
            }}
            className={Style.GradientDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
