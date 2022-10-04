import React from 'react';
import Style from './Badges.module.scss'

const Badges = () => {
    return (
        <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h4>Gold Badge</h4>
        </div>
    );
};

export default Badges;