import React from "react";
import { useNavigate } from "react-router-dom";
import CodeArea from "../CodeArea/CodeArea";
import VotingSystem from "../VotingSystem/VotingSystem";
import Style from "./Answers.module.scss";

const Answer = (props) => {
  let data = props.allData;
  console.log(props.allData);

  return (
    <div className="Answer">
      <VotingSystem className={Style.left} />
      <p className={Style.answerText}>
        <strong>{data.username}</strong>
        {data.answerDescription}
      </p>
      <CodeArea language="java">{data.codeSnippet}</CodeArea>
    </div>
  );
};

export default Answer;
