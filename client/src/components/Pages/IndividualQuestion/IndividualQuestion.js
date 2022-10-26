import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddAnswer from "../../subcomponents/AddAnswer/AddAnswer";
import Answer from "../../subcomponents/Answers/Answers";
import Button from "../../subcomponents/Buttons/Button";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import ImagePreview from "../../subcomponents/ImagePreview/ImagePreview";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import VotingSystem from "../../subcomponents/VotingSystem/VotingSystem";
import Style from "./IndividualQuestion.module.scss";

const IndividualQuestion = () => {
  let location = useLocation();
  let Navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [imagePrev, setImagePrev] = useState();
  const [answerModal, setAnswerModal] = useState();
  const [loginAlert, setLoginAlert] = useState();
  const [Answers, setAnswers] = useState();
  const [ShowPreview, setShowPreview] = useState(false);

  let userData = sessionStorage.getItem("UserData");
  let user = JSON.parse(userData);

  useEffect(() => {
    let URL =
      "http://localhost:2000/QuestionImages/" + location.state.allData.image;
    setImageUrl(URL);
    setImagePrev(URL);
    console.log(location.state.allData);
  }, [location.state.allData.image]);

  //all answers
  useEffect(() => {
    axios.get("http://localhost:2000/api/allAnswers").then((res) => {
      let questionData = res.data;

      let ChildId = location.state.allData._id;

      let renderAnswers = questionData
        .filter((data) => data.ParentQuestionId === ChildId)
        .map((item) => (
          <Answer
            setImageUrl={setImageUrl}
            ShowPreview={ShowPreview}
            setShowPreview={setShowPreview}
            allData={item}
          />
        ));

      setAnswers(renderAnswers);
    });
  }, []);

  const reply = () => {
    if (user === "" || user === null) {
      setLoginAlert(<LoginAlert rerender={setLoginAlert} />);
    } else {
      setAnswerModal(
        <AddAnswer allData={location.state.allData} rerender={setAnswerModal} />
      );
    }
  };

  return (
    <div className={Style.questionBlock}>
      <div onClick={() => Navigate(-1)} className={Style.closeButton}>
        <div className={Style.White}>x</div>
      </div>
      <ImagePreview IMG={imageUrl} setShowPreview={setShowPreview} ShowPreview={ShowPreview}
      />

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
          onClick={() => setShowPreview(!ShowPreview)}
          className={Style.questionImage}
          style={{ backgroundImage: `url(${imagePrev})` }}
        ></div>
        <p className={Style.questionDescription}>
          {" "}
          {location.state.allData.questionDescription}{" "}
        </p>

        <br />
        <br />
        <br />

        <p>({location.state.allData.language.toLowerCase()})</p>
        <CodeArea language={location.state.allData.language.toLowerCase()}>
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
        </div>

        <hr />
        <br />

        <Button type="Primary" className={Style.reply} onClick={reply}>
          Reply
        </Button>
        <br />

        <br />
        <h2 className={Style.heading}>Answers</h2>
        {Answers}
      </div>
    </div>
  );
};

export default IndividualQuestion;
