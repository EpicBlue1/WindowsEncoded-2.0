import React from 'react';
import Style from './Questions.module.scss';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';
import AddQuestion from '../../subcomponents/AddQuestion/AddQuestion';

const Questions = () => {
    return (
        <div className={Style.body}>

            <AddQuestion/>

            <div className={Style.addButton}>+</div>
            <h2 className={Style.heading}>ASK A QUESTION</h2>

            <QuestionCard/>
            <QuestionCard/>
        </div>
    );
};

export default Questions;