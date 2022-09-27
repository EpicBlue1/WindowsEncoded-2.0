import React from 'react';
import Style from './ProfileSection.module.scss'


const ProfileSection = () => {
    return (
        <div className={Style.MainProfileSection}>
            <div className={Style.EditButton}>
                <div className={Style.EditPen}></div>
            </div>
            <div className={Style.ProfileImage}></div>
            <div className={Style.ProfileDisplayBadge}></div>
            <h2 className={Style.Username}>Username</h2>
            <h3 className={Style.MemberLength}>Member for 1 year, 2 months</h3>
            <div className={Style.Progress}></div>

            <div className={Style.TotalAsked}>
                <h1 className={Style.Scores}>1</h1>
                <h3 className={Style.ScoreText}>Questions Asked</h3>
            </div>

            <div className={Style.TotalAnswered}>
                <h1 className={Style.Scores}>1</h1>
                <h3 className={Style.ScoreText}>Questions Answered</h3>
            </div>

            <div className={Style.ReliabilityScore}>
                <h1 className={Style.Scores}>1</h1>
                <h3 className={Style.ScoreText}>Reliability Score</h3>
            </div>



        </div>
    );
};

export default ProfileSection;