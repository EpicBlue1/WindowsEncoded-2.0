import React from 'react';
import Badges from '../../subcomponents/Badges/Badges';
import ProfileQuestion from '../../subcomponents/ProfileQuestion/ProfileQuestion';
import ProfileSection from '../../subcomponents/ProfileSection/ProfileSection';
import Style from './Profile.module.scss'


const Profile = () => {
    return (

      <div className={Style.body}>
        <h1>BADGES</h1>
        <div className={Style.BadgeSection}>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>
          <Badges/>

        </div>
        <br></br>
        <h1>YOUR ACTIVITY</h1>
        <div className={Style.QuestionSection}>
          
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