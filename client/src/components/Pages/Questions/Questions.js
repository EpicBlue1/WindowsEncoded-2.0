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
  const [Filter, setFilter] = useState([]);
  const [loginAlert, setLoginAlert] = useState();
  const [updateRender, setUpdateRender] = useState(false);
  const [Updated, setUpdated] = useState("Not Updated");

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
      .get("/api/allQuestions")
      .then((res) => {
        console.log(res);
        let questionData = res.data.reverse();
        let Sort = SortBy.current.value;
        let sortData = res.data.reverse();

        console.log("Filter");
        setUpdated("Not Updated");

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
        setRenderQuestions(false);
      })
      .catch((err) => console.log(err));
  }, [updateRender, addQuestionModal, Filter, SortBy]);

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

        <div
          className={
            questions === "" ||
            questions === "null" ||
            questions === undefined ||
            Updated === "Updated"
              ? Style.Loading
              : null
          }
        ></div>

        <div className={Style.Dropdown}>
          <h2 className={Style.headingTwo}>Sort by</h2>
          <select
            onChange={() => {
              setFilter(SortBy.current.value);
              setUpdated("Updated");
            }}
            ref={SortBy}
          >
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
      <div className={Style.Questions}>{questions}</div>
      <div className={Style.filterSec}>
        <h2>Filter By</h2>
        <form>
          <ul class={Style.ks_cboxtags}>
            <li>
              <input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
              <label for="checkboxOne">Rainbow Dash</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
              <label for="checkboxTwo">Cotton Candy</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxThree" value="Rarity" />
              <label for="checkboxThree">Rarity</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxFour" value="Moondancer" />
              <label for="checkboxFour">Moondancer</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxFive" value="Surprise" />
              <label for="checkboxFive">Surprise</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxSix"
                value="Twilight Sparkle"
              />
              <label for="checkboxSix">Twilight Sparkle</label>
            </li>
          </ul>
          <Button type="Primary">Clear Filter</Button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
