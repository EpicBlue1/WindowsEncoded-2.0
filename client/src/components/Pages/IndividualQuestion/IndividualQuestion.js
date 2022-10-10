import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, json } from "react-router-dom";
import Answer from "../../subcomponents/Answers/Answers";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import TextArea from "../../subcomponents/TextArea/TextArea";
import VotingSystem from "../../subcomponents/VotingSystem/VotingSystem";
import Style from "./IndividualQuestion.module.scss";

const IndividualQuestion = () => {
  
  let navigate = useNavigate();
  let location = useLocation();
  const [imageUrl, setImageUrl] = useState();

  console.log(location.state);

  const [questionData, setQuestionData] = useState({
    questionTitle: "",
    questionDescription: "",
    codeSnippet: "",
    userId: "",
    username: "",
  });

  useEffect(() => {
    let URL = "http://localhost:2000/QuestionImages/" + location.state.allData.image;
    console.log(location.state.allData.image);
    setImageUrl(URL);
  }, [])

  return (
    <div className={Style.questionBlock}>
      <div className={Style.left}>
        <VotingSystem />
      </div>

      <div className={Style.questionIntro}>
        <div className={Style.profileImg}></div>
        <p className={Style.username}>{location.state.allData.username}</p>
        <br />
        <h2 className={Style.headingQuestion}>{location.state.allData.questionTitle}</h2>
      </div>

      <div className={Style.questionDetails}>
        <div className={Style.questionImage}>
          <img src={imageUrl} />
        </div>
        <p className={Style.questionDescription}>
          {location.state.allData.questionDescription}
        </p>

        <br />
        <br />
        <br />
        <br />

        <CodeArea language="html" className="CodeArea">
          {location.state.allData.codeSnippet}
        </CodeArea>

        <hr className={Style.horisontalLine} />
        <h2 className={Style.heading}>Answer Question</h2>
        <TextArea name="answer"/>

        <hr className={Style.horisontalLine}/>
        <h2 className={Style.heading}>Answers</h2>
        <Answer />
      </div>
    </div>
  );
};

export default IndividualQuestion;
