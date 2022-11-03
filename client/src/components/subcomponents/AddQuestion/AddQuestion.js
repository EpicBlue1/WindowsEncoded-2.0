import axios from "axios";
import React, { useRef, useState } from "react";
import Button from "../../subcomponents/Buttons/Button";
import Input from "../Inputs/Input";
import Style from "./AddQuestion.module.scss";
import VotingSystem from "../VotingSystem/VotingSystem";
import CodeArea from "../CodeArea/CodeArea";

const AddQuestion = (props) => {
  const [imageName, setImageName] = useState("Upload a file");
  const [questionInputs, setQuestionInputs] = useState();
  const [Valid, setValid] = useState("");
  const [questionImage, setQuestionImage] = useState();

  const [questionTitle, setQuestionTitle] = useState("Question Title");
  const [questionDescription, setQuestionDescription] = useState("Question Description");
  const [questionLanguage, setQuestionLanguage] = useState("Language");
  const [questionCode, setQuestionCode] = useState("props.setUpdateRender(!props.updateRender);");

  const Form = useRef();
  const QuesTitle = useRef();
  const Image = useRef();
  const Desc = useRef();
  const Code = useRef();
  const LangSelect = useRef();

  let userData = sessionStorage.getItem("UserData");

  userData = JSON.parse(userData);

  const closeModal = () => {
    props.rerender();
  };

  const questionInfo = (e) => {
    const { name, value } = e.target;
    setQuestionInputs({ ...questionInputs, [name]: value });

    setQuestionTitle(questionInputs.questionTitle)
    setQuestionDescription(questionInputs.questionDescription)
    setQuestionLanguage(questionInputs.language)
    setQuestionCode(questionInputs.codeSnippet)
  };

  const getImage = (e) => {
    let imageFile = e.target.files[0];
    setQuestionImage(imageFile);

    let value = e.target.value;
    let imageName = value.substring(12);
    setImageName("imageName");

    let reader = new FileReader();
    reader.onload = () => {
      let output = document.getElementById("prev_img");
      let previewOutput = document.getElementById("previewImage")
      output.src = reader.result;
      previewOutput.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const addQuestion = (e) => {
    e.preventDefault();
    if (
      QuesTitle.current.value === "" ||
      Image.current.value === "" ||
      Desc.current.value === "" ||
      Code.current.value === "" ||
      LangSelect.current.value === "Please Select the Language..."
    ) {
      setValid("Please make sure to fill in all the fields");
    } else {
      const payloadData = new FormData();

      let payload = {
        userId: userData._id,
        username: userData.username,
        questionTitle: questionInputs.questionTitle,
        questionDescription: questionInputs.questionDescription,
        codeSnippet: questionInputs.codeSnippet,
        language: questionInputs.language,
      };

      payloadData.append("information", JSON.stringify(payload));
      payloadData.append("image", questionImage);

      for (var pair of payloadData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      for (let [key, value] of payloadData) {
        console.log(`${key}: ${value}`);
      }

      axios
        .post("http://localhost:2000/api/newQuestion/", payloadData)
        .then(() => {
          props.rerender();
          props.setUpdateRender(!props.updateRender);
        });
    }
  };

  return (
    <div className={Style.BackgroundBlur}>

      <div className={Style.closeButton} onClick={closeModal}>
        <div>x</div>
      </div>

      <div className={Style.addQuestionCard}>
        <form ref={Form}>
          <h2>Add a Question</h2>

          <Input Intype="ModalInput" placeholder="Question Title" name="questionTitle" ref={QuesTitle} onChange={questionInfo}/>

          <p>Add a brief description of your Question</p>

          <div className={Style.PfBlockUp}>
            <div className={Style.upload_btn_wrapper}>
              <img id="prev_img" />
              <button className={Style.btn}>{imageName}</button>
              <input ref={Image} type="file" name="image" onChange={getImage} />
            </div>
          </div>

          <textarea className={Style.textBox} name="questionDescription" ref={Desc} onChange={questionInfo} placeholder="eg. I would like one of my components to pop up with the click of a button." ></textarea>
          <p>Explain your question in detail. Be specific.</p>

          <select ref={LangSelect} name="language" onChange={questionInfo}>
            <option>Please Select the Language...</option>
            <option>Javascript</option>
            <option>PHP</option>
            <option>Swift</option>
            <option>Kotlin</option>
          </select>

          <textarea
            className={Style.codeBox}
            name="codeSnippet"
            ref={Code}
            onChange={questionInfo}
            placeholder="eg. const [modal, setModal] = useState();"
          ></textarea>
          <p>Add your code here</p>

          {/* TODO: Add Tags */}

          <Button className={Style.Auto} type="Primary" onClick={addQuestion}>
            Add Question
          </Button>
          <br />
          <br />
          <h3 className={Style.TextRed}>{Valid}</h3>
        </form>
      </div>

      <div className={Style.questionPreview}>
        <div className={Style.left}>
          <VotingSystem />
        </div>

        <div className={Style.questionIntro}>
          <div className={Style.profileImg}></div>
          <p className={Style.username}>Username</p>
          <br />
          <h2 className={Style.headingQuestion}>{questionTitle}</h2>
        </div>

        <br />

        <div className={Style.questionDetails}>
          <div className={Style.questionImage}>
            <img id="previewImage" /> 
          </div>
          <p className={Style.questionDescription}>{questionDescription}</p>
          <p>{questionLanguage}</p>
          <br />
          <CodeArea language="Javascript">
            {questionCode}
          </CodeArea>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
