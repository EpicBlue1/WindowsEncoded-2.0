import React from 'react';
import Style from './ProfileSection.module.scss'


const ProfileSection = () => {
    return (
        <div className={Style.MainProfileSection}>
            <div className={Style.EditButton}></div>
            <div className={Style.ProfileImage}></div>
            <div className={Style.ProfileDisplayBadge}></div>

        </div>
    );
};

export default ProfileSection;