import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
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

            <div className={Style.Topics}>
                <h2>Topics</h2>

<CheckBox/>
<CheckBox/>
<CheckBox/>
<CheckBox/>

                {/* <input id='1' type="checkbox" className={Style.CheckBox}/>
                <label for="1" className={Style.label}> Css </label> */}

                
            </div>

        </div>
    );
};

export default LeftNav;