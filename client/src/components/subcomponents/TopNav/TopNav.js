import React from 'react';
import Style from './TopNav.module.scss';


const TopNav = () => {
    return (
        <div className={Style.topNav}>
            <div className={Style.LOGO}></div>

            <div className={Style.ProfileImage}></div>
        </div>
    );
};

export default TopNav;