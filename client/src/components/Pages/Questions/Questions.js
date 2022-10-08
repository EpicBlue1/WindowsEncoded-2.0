import React, { useState, useEffect } from 'react';
import Style from './Questions.module.scss';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import AddQuestion from '../../subcomponents/AddQuestion/AddQuestion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Questions = () => {

    const [addQuestionModal, setAddQuestionModal] = useState();
    const [questions, setQuestions] = useState();
    const [renderQuestions, setRenderQuestions] = useState(false);

    const addQuestion = () => {
        setAddQuestionModal(<AddQuestion rerender={setAddQuestionModal}/>)
    }

    useEffect(() => {
        axios.get('http://localhost:2000/api/allQuestions')
        .then(res => {
            let questionData = res.data;
            // console.log(questionData)

            let URL = 'http://localhost:2000/QuestionImages/';
            let renderQuestions = questionData.map((item) => <QuestionCard
                key={item._id}
                questionId={item._id}
                questionTitle={item.questionTitle}
                questionDescription={item.questionDescription}
                codeSnippet={item.codeSnippet}
                image={URL + item.image}
                editRender={setRenderQuestions}
            />)

            setQuestions(renderQuestions);
            setRenderQuestions(false);
        })
        .catch(err => console.log(err));
    }, [renderQuestions])

    return (
        <div className={Style.body}>

            {addQuestionModal}

            <div className={Style.addButton} onClick={addQuestion}>+</div>
            <h2 className={Style.heading}>ASK A QUESTION</h2>

            {questions}
        </div>
    );
};

export default Questions;