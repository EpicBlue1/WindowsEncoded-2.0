import React from 'react';
import Style from './Badges.module.scss'

const Badges = () => {
    return (
        <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h2>10</h2>
            <h3>Gold Badges</h3>
        </div>
    );
};

export default Badges;