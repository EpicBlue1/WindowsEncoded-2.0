import React from 'react';
import Style from './QuestionCard.module.scss';
import { useNavigate } from 'react-router-dom';

const QuestionCard = (props) => {

    let navigate = useNavigate();

    const viewQuestion = () => {
        sessionStorage.setItem('questionId', props.questionId)
        navigate('/IndividualQuestion');
    }

    return (
        <div className={Style.QuestionCard} onClick={viewQuestion}>
            <div className={Style.Left}>
                <div className={Style.profileImg}></div>
                <p className={Style.username}>Username</p>

                <br/>

                <h2 className={Style.heading}>{props.questionTitle}</h2>

                <div className={Style.tag}>CSS</div>
                <div className={Style.tag}>JavaScript</div>

                <br/>
                <br/>

                <p>{props.questionDescription}</p>
            </div>
            <div className={Style.Right}>
                <div className={Style.TopVote}></div>
                <div className={Style.BottomVote}></div>
            </div>
        </div>
    );
};

export default QuestionCard;