import React from 'react';
import Style from './Input.module.scss'

const Input = (props) => {
    return (

    <div className={`${Style.InputWidth} ${props.className} `}>
        <input type={props.type} placeholder={props.placeholder}  className={`${props.className ? props.className : ""} ${props.Intype === "Search" ? Style.Search : props.Intype === "Login" ? Style.Login : ""}`}/>
        <div className={props.Intype === 'Search' ? Style.Icon : "hide"}></div>
    </div>

    );
};

export default Input;