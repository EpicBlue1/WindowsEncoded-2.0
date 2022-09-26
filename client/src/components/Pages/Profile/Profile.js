import React from 'react';
import Badges from '../../subcomponents/Badges/Badges';
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import ProfileQuestion from '../../subcomponents/ProfileQuestion/ProfileQuestion';
import ProfileSection from '../../subcomponents/ProfileSection/ProfileSection';
import TopNav from '../../subcomponents/TopNav/TopNav';
import Style from './Profile.module.scss'


const Profile = () => {
    return (
      <div className={Style.body}>
      <TopNav/>
      <LeftNav/>
      <div className={Style.BadgeSection}>
          <h1>Badges</h1>
        <Badges/>
        <Badges/>
        <Badges/>

      </div>
      <div className={Style.QuestionSection}>
        <h1>Your Activity</h1>
        <div className={Style.DropDown}></div>
        <ProfileQuestion/>
        <ProfileQuestion/>
        <ProfileQuestion/>

      </div>
      <div className={Style.ProfileSection}>
        <ProfileSection/>
      </div>


      </div>
      
    );
};

export default Profile;