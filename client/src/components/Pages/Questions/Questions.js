import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionCard from "../../Cards/QuestionCard/QuestionCard";
import AddQuestion from "../../subcomponents/AddQuestion/AddQuestion";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import Style from "./Questions.module.scss";

const Questions = (props) => {
  const [addQuestionModal, setAddQuestionModal] = useState();
  const [questions, setQuestions] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [renderQuestions, setRenderQuestions] = useState(false);
  const [loginAlert, setLoginAlert] = useState();
  const [updateRender, setUpdateRender] = useState(false);
  let userData = sessionStorage.getItem("UserData");
  let user = JSON.parse(userData);

  const addQuestion = () => {
    let user = sessionStorage.getItem("UserData");

    if (user === "" || user === null) {
      setLoginAlert(<LoginAlert rerender={setLoginAlert} />);
    } else {
      setAddQuestionModal(
        <AddQuestion
          updateRender={updateRender}
          setUpdateRender={setUpdateRender}
          rerender={setAddQuestionModal}
        />
      );
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/allQuestions")
      .then((res) => {
        let questionData = res.data;
        console.log("Updated");

        let renderQuestions = questionData.map((item) => (
          <QuestionCard
            key={item._id}
            userId={item.userId}
            username={item.username}
            questionId={item._id}
            questionTitle={item.questionTitle}
            questionDescription={item.questionDescription}
            codeSnippet={item.codeSnippet}
            language={item.language}
            image={URL + item.image}
            editRender={setRenderQuestions}
            allData={item}
          />
        ));

        setQuestions(renderQuestions);
        console.log(questions);
        setRenderQuestions(false);
      })
      .catch((err) => console.log(err));
  }, [updateRender, addQuestionModal]);

  return (
    <div className={Style.body}>
      {loginAlert}
      {addQuestionModal}

      <div className={Style.addButton} onClick={addQuestion}>
        +
      </div>
      <h2 className={Style.heading}>ASK A QUESTION</h2>

      {questions}
    </div>
  );
};

export default Questions;
