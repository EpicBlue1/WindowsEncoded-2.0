import React from 'react';
import Style from './ProfileQuestion.module.scss'



const ProfileQuestion = () => {
    return (
        <div className={Style.ProfQ}>
            <h1>Question Title</h1>

            <div className={Style.Qscore}>
                <h1 className={Style.Score}>1</h1>
            </div>
        </div>
    );
};

export default ProfileQuestion;