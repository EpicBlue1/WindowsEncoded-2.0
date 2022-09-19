import React from 'react';
import Style from './Button.module.scss';

const Button = (props) => {
    return (
        <button className={`${props.className ? props.classname : ""}${props.type === "Prime" ? Style.primary : props.type === "Second" ? Style.secondary : Style.tertiary}`}>
            {props.children}
        </button>
    );
};

export default Button;