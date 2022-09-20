import React from 'react';
import Style from './Input.module.scss'

const Input = (props) => {
    return (
        <div className={Style.InputWidth}>
        <input placeholder={props.placeholder} className={`${props.className ? props.className : ""}${props.type === "Search" ? Style.Search : props.type === "Login" ? Style.Login : ""}`}/>
        <div className={props.type === 'Search' ? Style.Icon : ""}></div>
        </div>
    );
};

export default Input;