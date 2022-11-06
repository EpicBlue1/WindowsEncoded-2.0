import axios from 'axios';
import React from 'react';
import Style from "./FlaggedQuestions.module.scss";


const FlaggedQuestions = (props) => {
    // console.log(props);

    // console.log(props.alldata);
    // AllData = props.alldata;
    let flaggedData = props.alldata;
    // console.log(flaggedData.questionTitle);

    let QuestionId = props.QuesId;
    // console.log(QuestionId);

    const deleteQuestion = () => {
        axios.delete('http://localhost:2000/api/deleteQuestion/' + QuestionId)
        .then(res => {
            // props.rerender();
            alert('Your Question has been Deleted')
        })
        .catch(function(err) {console.log(err)});
      }

    return (
        <div className={Style.FlaggedQuestionAdmin}>
            
            <h5 className={Style.Username}>{flaggedData.username}</h5>
            <h1 className={Style.Title}>{flaggedData.questionTitle}</h1>   
            <div className={Style.flaggedTag}>{flaggedData.language}</div> 
            <div className={Style.deleteButton} onClick={deleteQuestion}></div>

            {/* <div className={Style.Delete}>delete</div> */}
            
            
            
        </div>
    );
};

export default FlaggedQuestions;