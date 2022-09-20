import React from 'react';
import Style from './QuestionCard.module.scss'

const QuestionCard = (props) => {
    return (
        <div className={Style.QuestionCard}>
            <div className={Style.Left}></div>
            <div className={Style.Right}>
                <div className={Style.TopVote}></div>
                <div className={Style.BottomVote}></div>
            </div>
        </div>
    );
};

export default QuestionCard;