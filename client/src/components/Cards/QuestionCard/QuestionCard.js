import React from 'react';
import Style from './QuestionCard.module.scss'

const QuestionCard = (props) => {
    return (
        <div className={Style.QuestionCard}>
            <div className={Style.Left}>
                <div className={Style.profileImg}></div>
                <p className={Style.username}>Username</p>

                <br/>

                <h2 className={Style.heading}>Question Title</h2>

                <div className={Style.tag}>CSS</div>
                <div className={Style.tag}>JavaScript</div>

                <br/>
                <br/>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...</p>
            </div>
            <div className={Style.Right}>
                <div className={Style.TopVote}></div>
                <div className={Style.BottomVote}></div>
            </div>
        </div>
    );
};

export default QuestionCard;