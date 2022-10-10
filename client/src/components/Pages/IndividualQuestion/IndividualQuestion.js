import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Answer from "../../subcomponents/Answers/Answers";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import TextArea from "../../subcomponents/TextArea/TextArea";
import VotingSystem from "../../subcomponents/VotingSystem/VotingSystem";
import Style from "./IndividualQuestion.module.scss";

const IndividualQuestion = () => {
  let navigate = useNavigate();
  let questionId = sessionStorage.getItem("questionId");
  const [imgageUrl, setImageUrl] = useState();

  const [questionData, setQuestionData] = useState({
    questionTitle: "",
    questionDescription: "",
    codeSnippet: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/oneQuestion/" + questionId)
      .then((res) => {
        let data = res.data;
        const code = data.codeSnippet;
        setQuestionData({
          questionTitle: data.questionTitle,
          questionDescription: data.questionDescription,
          codeSnippet: code,
        });
        console.log(data.image);
        let URL = "http://localhost:2000/QuestionImages/" + data.image;
        setImageUrl(URL);
      });
  }, []);

  return (
    <div className={Style.questionBlock}>
      <div className={Style.left}>
        <VotingSystem />
      </div>

      <div className={Style.questionIntro}>
        <div className={Style.profileImg}></div>
        <p className={Style.username}>Username</p>
        <br />
        <h2 className={Style.headingQuestion}>{questionData.questionTitle}</h2>
      </div>

      <div className={Style.questionDetails}>
        <div className={Style.questionImage}>
          <img src={imgageUrl} />
        </div>
        <p className={Style.questionDescription}>
          {questionData.questionDescription}
        </p>

        <br />
        <br />
        <br />
        <br />

        <CodeArea language="html" className="CodeArea">
          {questionData.codeSnippet}
        </CodeArea>

        <hr className={Style.horisontalLine} />
        <h2 className={Style.heading}>Answer Question</h2>
        <TextArea />

        <hr className={Style.horisontalLine} />
        <h2 className={Style.heading}>Answers</h2>
        <Answer />
      </div>
    </div>
  );
};

export default IndividualQuestion;
