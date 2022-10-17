import axios from "axios";
import React, { useState } from "react";
import Button from "../../subcomponents/Buttons/Button";
import LoginAlert from "../LoginModal/LoginAlert";
import Style from "./AddAnswer.module.scss";

const AddAnswer = (props) => {

    let userData = sessionStorage.getItem("UserData");
    let user = JSON.parse(userData);
    const [answer, setAnswer] = useState();
    const [answerImage, setAnswerImage] = useState();
    const [imageName, setImageName] = useState("Upload a file");

    const closeModal = () => {
      props.rerender();
    };

    const answerInfo = (e) => {
      const { name, value } = e.target;
      setAnswer({ ...answer, [name]: value });
    };

    const getImage = (e) => {
      let imageFile = e.target.files[0];
      setAnswerImage(imageFile);
  
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

    const addAnswer = (e) => {
      e.preventDefault()
      console.log(answer)

      const payloadData = new FormData();
      
      let payload = {
        Answers: {
          userId: user._id,
          username: user.username,
          answerDescription: answer.answerDescription,
          codeSnippet: answer.codeSnippet
        },
      };

      payloadData.append("information", JSON.stringify(payload));
      payloadData.append("image", answerImage);

      console.log(payload);
      axios.post("http://localhost:2000/api/newAnswer", payloadData);
      props.rerender();
    };


  return (
    <div className={Style.BackgroundBlur}>
      <div className={Style.addAnswerCard}>
        <div className={Style.closeButton} onClick={closeModal}>
          <div>x</div>
        </div>

        <form>
          <h2>Add a Answer</h2>

          <div className={Style.PfBlockUp}>
            <div className={Style.upload_btn_wrapper}>
              <img id="prev_img" />
              <button className={Style.btn}>{imageName}</button>
              <input type="file" name="image" onChange={getImage} />
            </div>
          </div>

          <textarea className={Style.textBox} name="answerDescription" onChange={answerInfo}></textarea>
          <textarea className={Style.codeBox} name="codeSnippet" onChange={answerInfo}></textarea>

          <Button type="Primary" onClick={addAnswer}>Add Answer</Button>
        </form>
      </div>
    </div>
  );
};

export default AddAnswer;