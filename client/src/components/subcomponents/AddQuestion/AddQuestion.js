import axios from "axios";
import React, { useState } from "react";
import Button from "../../subcomponents/Buttons/Button";
import Input from "../Inputs/Input";
import Style from "./AddQuestion.module.scss";

const AddQuestion = (props) => {
  const [imageName, setImageName] = useState("Upload a file");
  const [questionInputs, setQuestionInputs] = useState();
  const [questionImage, setQuestionImage] = useState();
  let userData = sessionStorage.getItem("UserData");

  userData = JSON.parse(userData);

  // console.log(userData.username);

  const closeModal = () => {
    props.rerender();
  };

  const questionInfo = (e) => {
    const { name, value } = e.target;
    setQuestionInputs({ ...questionInputs, [name]: value });
  };

  const getImage = (e) => {
    let imageFile = e.target.files[0];
    setQuestionImage(imageFile);

    let value = e.target.value;
    let imageName = value.substring(12);
    setImageName(imageName);

    let reader = new FileReader();
    reader.onload = () => {
      let output = document.getElementById("prev_img");
      output.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const addQuestion = (e) => {
    e.preventDefault();
    // console.log(questionInputs);
    // console.log(image);

    const payloadData = new FormData();

    let payload = {
      userId: userData._id,
      username: userData.username,
      questionTitle: questionInputs.questionTitle,
      questionDescription: questionInputs.questionDescription,
      codeSnippet: questionInputs.codeSnippet,
    };

    console.log(payload);

    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", questionImage);

    axios.post("http://localhost:2000/api/newQuestion", payloadData);
    props.rerender();
  };

  return (
    <div className={Style.BackgroundBlur}>
      <div className={Style.addQuestionCard}>
        <div className={Style.closeButton} onClick={closeModal}>
          <div>x</div>
        </div>

        <form>
          <h2>Add a Question</h2>

          <Input
            Intype="ModalInput"
            placeholder="Title..."
            name="questionTitle"
            onChange={questionInfo}
          />

          <div className={Style.PfBlockUp}>
            <div className={Style.upload_btn_wrapper}>
              <img id="prev_img" />
              <button className={Style.btn}>{imageName}</button>
              <input type="file" name="image" onChange={getImage} />
            </div>
          </div>

          <textarea
            className={Style.textBox}
            name="questionDescription"
            onChange={questionInfo}
          ></textarea>
          <textarea
            className={Style.codeBox}
            name="codeSnippet"
            onChange={questionInfo}
          ></textarea>

          <Button type="Primary" onClick={addQuestion}>
            Add Question
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;