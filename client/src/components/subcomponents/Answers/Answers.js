import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeArea from "../CodeArea/CodeArea";
import ImagePreview from "../ImagePreview/ImagePreview";
import VotingSystem from "../VotingSystem/VotingSystem";
import Style from "./Answers.module.scss";

const Answer = (props) => {
  const [ShowPreview, setShowPreview] = useState(false);

  let data = props.allData;
  console.log(props.allData);

  return (
    <div className="Answer">
      <ImagePreview
        IMG={""}
        setShowPreview={setShowPreview}
        ShowPreview={ShowPreview}
      />
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
