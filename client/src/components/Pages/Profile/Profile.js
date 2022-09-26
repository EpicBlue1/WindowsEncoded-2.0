import React from 'react';
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import TopNav from '../../subcomponents/TopNav/TopNav';
import Style from './Profile.module.scss'


const Profile = () => {
    return (
      <div className={Style.body}>
      <TopNav/>
      <LeftNav/>
      <div className={Style.BadgeSection}></div>
      <div className={Style.QuestionSection}></div>
      <div className={Style.ProfileSection}></div>


      </div>
      
    );
};

export default Profile;