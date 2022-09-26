import React from 'react';
import Style from './LeftNav.module.scss';


const LeftNav = () => {
    return (
        <div className={Style.leftNav}>
            <div className={Style.Home}>
                <div className={Style.IconSpot}>
                    <div className={Style.Icon}></div>
                </div>
                <h2 className={Style.text}>Home</h2>
            </div>

            <div className={Style.Questions}>
                <div className={Style.IconSpot}>
                    <div className={Style.Icon2}></div>                   
                </div>
                <h2 className={Style.text}>Home</h2>
            </div>

        </div>
    );
};

export default LeftNav;