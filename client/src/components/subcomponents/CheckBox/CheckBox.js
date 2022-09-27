import React from 'react';
import Style from './CheckBox.module.scss';


const CheckBox = () => {
    return (
        <div className={Style.CheckBox}>
            <input id='1' type="checkbox" className={Style.Check}/>
            <label for="1" className={Style.label}> Css </label>
        </div>
    );
};

export default CheckBox;