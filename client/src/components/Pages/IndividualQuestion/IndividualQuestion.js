import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import Answer from "../../subcomponents/Answers/Answers";
import Button from "../../subcomponents/Buttons/Button";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import VotingSystem from "../../subcomponents/VotingSystem/VotingSystem";
import Style from "./IndividualQuestion.module.scss";

const IndividualQuestion = () => {
  let location = useLocation();
  const [imageUrl, setImageUrl] = useState();
  const [answer, setAnswer] = useState();
  const [loginAlert, setLoginAlert] = useState();
  const [renderAnswers, setRenderAnswers] = useState();
  let userData = sessionStorage.getItem("UserData");
  let questionId = sessionStorage.getItem("questionId");

  userData = JSON.parse(userData);

  useEffect(() => {
    let URL =
      "http://localhost:2000/QuestionImages/" + location.state.allData.image;
    setImageUrl(URL);
    console.log(URL);
  }, [location.state.allData.image]);

  const answerInfo = (e) => {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  };

  const answerQuestion = () => {
    console.log(answer);

    let user = sessionStorage.getItem("UserData");

    if (user === "" || user === null) {
      setLoginAlert(<LoginAlert rerender={setLoginAlert} />);
    } else {
      let payload = {
        Answers: {
          userId: userData._id,
          username: userData.username,
          Answer: answer.answer,
        },
      };

      console.log(payload);
      axios.post("http://localhost:2000/api/newAnswer", payload);
    }
  };

  return (
    <div className={Style.questionBlock}>
      {loginAlert}
      <div className={Style.left}>
        <VotingSystem />
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
          {location.state.allData.questionDescription}
        </p>

        <br />
        <br />
        <br />
        <br />

        <CodeArea language="html">
          {location.state.allData.codeSnippet}
        </CodeArea>

        <hr className={Style.horisontalLine} />
        <h2 className={Style.heading}>Answer Question</h2>
        <textarea onChange={answerInfo} name="answer"></textarea>
        <br></br>
        <br></br>
        <Button type="Primary" onClick={answerQuestion}>
          Answer Question
        </Button>
        <br></br>
        <br></br>
        <hr className={Style.horisontalLine} />
        <h2 className={Style.heading}>Answers</h2>
        <Answer />
      </div>
    </div>
  );
};

export default IndividualQuestion;
