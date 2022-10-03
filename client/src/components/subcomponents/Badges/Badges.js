import React from 'react';
import Style from './Badges.module.scss'

const Badges = () => {
    return (
        <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h4>10</h4>
            <h6>Gold Badges</h6>
        </div>
    );
};

export default Badges;