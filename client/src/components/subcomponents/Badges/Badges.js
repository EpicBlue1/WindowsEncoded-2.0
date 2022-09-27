import React from 'react';
import Style from './Badges.module.scss'

const Badges = () => {
    return (
        <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h3>10</h3>
            <h4>Gold Badges</h4>
        </div>
    );
};

export default Badges;