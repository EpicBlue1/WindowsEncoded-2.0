import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import QuestionCard from "../../Cards/QuestionCard/QuestionCard";
import AddQuestion from "../../subcomponents/AddQuestion/AddQuestion";
import Button from "../../subcomponents/Buttons/Button";
import LoginAlert from "../../subcomponents/LoginModal/LoginAlert";
import Style from "./Questions.module.scss";

const Questions = (props) => {
  const [addQuestionModal, setAddQuestionModal] = useState();
  const [questions, setQuestions] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [renderQuestions, setRenderQuestions] = useState(false);
  const [Filter, setFilter] = useState();
  const [loginAlert, setLoginAlert] = useState();
  const [updateRender, setUpdateRender] = useState(false);

  const SortBy = useRef();

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
        let questionData = res.data.reverse();
        let Sort = SortBy.current.value;
        let sortData = res.data.reverse();

        console.log(sortData);
        // console.log(questionData);


        if (Sort === "Most recent") {
          sortData = res.data.reverse();
        } else if (Sort === "By highest score") {
          sortData = questionData.sort((x, y) => y.score - x.score);
        } else if (Sort === "By lowest score") {
          sortData = questionData.sort((x, y) => x.score - y.score);
        } else if (Sort === "By lowest upvotes") {
          sortData = questionData.sort((x, y) => x.upvotes - y.upvotes);
        } else if (Sort === "By highest upvotes") {
          sortData = questionData.sort((x, y) => y.upvotes - x.upvotes);
        } else if (Sort === "By lowest downvotes") {
          sortData = questionData.sort((x, y) => x.downvotes - y.downvotes);
        } else if (Sort === "By highest downvotes") {
          sortData = questionData.sort((x, y) => y.downvotes - x.downvotes);
        }
        // console.log(SortBy.current.value);

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
  }, [updateRender, addQuestionModal, Filter]);

  return (
    <div className={Style.body}>
      {loginAlert}
      {addQuestionModal}

      <div className={Style.addNFilter}>
        <div className={Style.Add}>
          <h2 className={Style.heading}>ASK A QUESTION</h2>

          <div className={Style.addButton} onClick={addQuestion}>
            +
          </div>
        </div>

        <div className={Style.Dropdown}>
          <h2 className={Style.headingTwo}>Sort by</h2>
          <select onChange={() => setFilter(!Filter)} ref={SortBy}>
            <option>Most recent</option>
            <option>By highest score</option>
            <option>By lowest score</option>
            <option>By highest upvotes</option>
            <option>By lowest upvotes</option>
            <option>By highest downvotes</option>
            <option>By lowest downvotes</option>
          </select>
        </div>
      </div>

      {questions}
    </div>
  );
};

export default Questions;
