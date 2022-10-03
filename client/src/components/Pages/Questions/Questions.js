import React, { useState } from 'react';
import Style from './Questions.module.scss';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import AddQuestion from '../../subcomponents/AddQuestion/AddQuestion';

const Questions = () => {

    const [addQuestionModal, setAddQuestionModal] = useState();

    const addQuestion = () => {
        setAddQuestionModal(<AddQuestion rerender={setAddQuestionModal}/>)
    }

    return (
        <div className={Style.body}>

            {addQuestionModal}

            <div className={Style.addButton} onClick={addQuestion}>+</div>
            <h2 className={Style.heading}>ASK A QUESTION</h2>

            <QuestionCard/>
            <QuestionCard/>
        </div>
    );
};

export default Questions;