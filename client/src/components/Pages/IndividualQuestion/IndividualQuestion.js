import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddAnswer from "../../subcomponents/AddAnswer/AddAnswer";
import Answer from "../../subcomponents/Answers/Answers";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import VotingSystem from "../../subcomponents/VotingSystem/VotingSystem";
import Style from "./IndividualQuestion.module.scss";

const IndividualQuestion = () => {
  let location = useLocation();
  let Navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [answerModal, setAnswerModal] = useState();
  const [loginAlert, setLoginAlert] = useState();
  //const [renderAnswers, setRenderAnswers] = useState();
  let userData = sessionStorage.getItem("UserData");
  let user = JSON.parse(userData);

  useEffect(() => {
    let URL =
      "http://localhost:2000/QuestionImages/" + location.state.allData.image;
    setImageUrl(URL);
  }, [location.state.allData.image]);

  const reply = () => {
    if (user === "" || user === null) {
      setLoginAlert(<LoginAlert rerender={setLoginAlert} />);
    } else {
      setAnswerModal(<AddAnswer rerender={setAnswerModal} />);
    }
  };

  return (
    <div className={Style.questionBlock}>
      <div onClick={() => Navigate(-1)} className={Style.closeButton}>
        <div className={Style.White}>x</div>
      </div>

      {loginAlert}
      {answerModal}
      <div className={Style.left}>
        {" "}
        <VotingSystem />{" "}
      </div>

      <div className={Style.questionIntro}>
        <div className={Style.profileImg}></div>
        <p className={Style.username}>{location.state.allData.username}</p>
        <br />
        <h2 className={Style.headingQuestion}>
          {location.state.allData.questionTitle}
        </h2>
      </div>

      <div className={Style.questionDetails}>
        <div
          className={Style.questionImage}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <p className={Style.questionDescription}>
          {" "}
          {location.state.allData.questionDescription}{" "}
        </p>

        <br />
        <br />
        <br />
        <br />

        <CodeArea language="html">
          {location.state.allData.codeSnippet}
        </CodeArea>
        <br />
        <div className="answerSection">
          <p className={Style.votes}>
            <strong>Upvotes: </strong>100
          </p>
          <p className={Style.votes}>
            <strong>Downvotes: </strong>100
          </p>
          <p className={Style.reply} onClick={reply}>
            Reply
          </p>
        </div>
        <br />
        <br />
        <hr className={Style.horisontalLine} />
        <br />
        <h2 className={Style.heading}>Answers</h2>
        <Answer />
      </div>
    </div>
  );
};

export default IndividualQuestion;
