import React from 'react';
import Style from './Input.module.scss'

const Input = (props) => {
    return (
        <input placeholder={props.placeholder} className={`${props.className ? props.className : ""}${props.type === "Search" ? Style.Search : props.type === "Login" ? Style.Login : ""}`}/>
    );
};

export default Input;