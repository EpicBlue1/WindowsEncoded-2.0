import axios from "axios";
import React, { useState } from "react";
import Button from "../../subcomponents/Buttons/Button";
import LoginAlert from "../LoginModal/LoginAlert";
import Style from "./AddAnswer.module.scss";

const AddAnswer = (props) => {

    let userData = sessionStorage.getItem("UserData");
    const [answer, setAnswer] = useState();

    const closeModal = () => {
        props.rerender();
    };

    const answerInfo = (e) => {
        const { name, value } = e.target;
        setAnswer({ ...answer, [name]: value });
    };

    const addAnswer = () => {
        let payload = {
            Answers: {
                userId: userData._id,
                username: userData.username,
                Answer: answer.answer,
            },
        };
        console.log(payload);
        // axios.post("http://localhost:2000/api/newAnswer", payload);
    };


  return (
    <div className={Style.BackgroundBlur}>
      <div className={Style.addAnswerCard}>
        <div className={Style.closeButton} onClick={closeModal}>
          <div>x</div>
        </div>

        <form>
          <h2>Add an Answer</h2>

          <textarea className={Style.textBox} name="questionDescription" onChange={answerInfo}></textarea>
          <textarea className={Style.codeBox} name="codeSnippet" onChange={answerInfo}></textarea>

          <Button type="Primary" onClick={addAnswer}> Add Question </Button>
        </form>
      </div>
    </div>
  );
};

export default AddAnswer;