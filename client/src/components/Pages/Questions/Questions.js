import React from 'react';
import Style from './Questions.module.scss';
import TopNav from '../../subcomponents/TopNav/TopNav';
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';

const Questions = () => {
    return (
        <div className={Style.body}>
            <TopNav/>
            <LeftNav/>
            
            <div className={Style.questionBlock}>
                <div className={Style.addButton}>+</div>
                <h2 className={Style.heading}>ASK A QUESTION</h2>

                <QuestionCard/>
            </div>
        </div>
    );
};

export default Questions;