import axios from "axios";
import React, { useEffect, useState } from "react";
import QuestionCard from "../../Cards/QuestionCard/QuestionCard";
import AddQuestion from "../../subcomponents/AddQuestion/AddQuestion";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import Style from "./Questions.module.scss";

const Questions = (props) => {
  const [addQuestionModal, setAddQuestionModal] = useState();
  const [questions, setQuestions] = useState();
  const [renderQuestions, setRenderQuestions] = useState(false);
  const [loginAlert, setLoginAlert] = useState();

  const addQuestion = () => {
    let user = sessionStorage.getItem("UserData");

    if (user === "" || user === null) {
      setLoginAlert(<LoginAlert rerender={setLoginAlert} />);
    } else {
      setAddQuestionModal(<AddQuestion rerender={setAddQuestionModal} />);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/allQuestions")
      .then((res) => {
        let questionData = res.data;
        // console.log(questionData)

        let URL = "http://localhost:2000/QuestionImages/";
        let renderQuestions = questionData.map((item) => (
          <QuestionCard
            key={item._id}
            userId={item.userId}
            username={item.username}
            questionId={item._id}
            questionTitle={item.questionTitle}
            questionDescription={item.questionDescription}
            codeSnippet={item.codeSnippet}
            image={URL + item.image}
            editRender={setRenderQuestions}
            allData={item}
          />
        ));

        setQuestions(renderQuestions);
        setRenderQuestions(false);

        props.setRender((prev) => !prev);
      })
      .catch((err) => console.log(err));
  }, [renderQuestions]);

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
