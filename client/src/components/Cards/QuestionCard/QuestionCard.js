import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let navigate = useNavigate();

  const Upvote = useRef();
  const DownVote = useRef();

  const [TotalUpVotes, setTotalUpVotes] = useState(props.allData.upvotes);
  const [TotalDownVotes, setTotalDownVotes] = useState(props.allData.downvotes);
  const [Total, setTotal] = useState(10);

  const [DownPerc, setDownPerc] = useState();
  const [UpPerc, setUpPerc] = useState();

  //WAS WORKING ON SCORE STUFF
  // const [action, setAction] = useState(0)
  // let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  useEffect(() => {
    //default
    let downPercentage = 0;
    let upPercentage = 0;

    let TotalSum = TotalDownVotes + TotalUpVotes;

    //voting is the total downvotes and upvotes summed
    //total is the upvotes minus the downvotes
    downPercentage = (TotalDownVotes / TotalSum) * 100;

    upPercentage = (TotalUpVotes / TotalSum) * 100;

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

    console.log(
      "UseEffect: " + Upvote.current.innerText + "" + DownVote.current.innerText
    );

    setTotal(TotalUpVotes - TotalDownVotes);
  }, [TotalUpVotes, TotalDownVotes]);

  function updateVote(e) {
    let data = props.allData;
    let productId = data._id;

    // let updateScore = {
    //   userId: data.userId,
    //   score: data.score,
    //   userData: props.userData,
    // };

    // axios
    //   .patch("/api/updateUserScore/" + data.userId, updateScore)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // axios.get("/api/singleUser/" + data.userId).then((res) => {
    //   console.log(res.data);
    // });

    let template = {
      score: +TotalUpVotes - +TotalDownVotes,
      upvotes: +TotalUpVotes,
      downvotes: +TotalDownVotes,
    };

    console.log(e);
    if (e === "Upvote") {
      template = {
        score: +TotalUpVotes + 1 - +TotalDownVotes,
        upvotes: +TotalUpVotes + 1,
        downvotes: +TotalDownVotes,
      };
    } else if (e === "Downvote") {
      template = {
        score: +TotalUpVotes - +TotalDownVotes - 1,
        upvotes: +TotalUpVotes,
        downvotes: +TotalDownVotes - 1,
      };
    }
    axios
      .patch("/api/updateVotes/" + productId, template)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(
      "Function: " + Upvote.current.innerText + "" + DownVote.current.innerText
    );
  }

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

        <div className={Style.tag}>{props.language}</div>
        {/* <div className={Style.tag}>JavaScript</div> */}

        <br />
        <br />

        <p className={Style.questionDescription}>{props.questionDescription}</p>
      </div>
      <div className={Style.Right}>
        <div className={Style.Container}>
          <div
            onClick={() => {
              setTotalUpVotes(TotalUpVotes + 1);
              updateVote("Upvote");
            }}
            style={{
              height: `${UpPerc}%`,
            }}
            className={Style.GradientUp}
          >
            <div
              ref={Upvote}
              style={{ color: "#5067EB" }}
              className={Style.totalUpNDown}
            >
              {TotalUpVotes}
            </div>
          </div>
          <div className={Style.Middle}>{Total}</div>
          <div
            onClick={() => {
              setTotalDownVotes(TotalDownVotes + 1);
              updateVote("Downvote");
            }}
            style={{
              height: `${DownPerc}%`,
            }}
            className={Style.GradientDown}
          >
            {" "}
            <div
              ref={DownVote}
              style={{ color: "red" }}
              className={Style.totalUpNDown}
            >
              -{TotalDownVotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
