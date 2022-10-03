import React from 'react';
import Style from './Input.module.scss';
import { forwardRef } from "react";

const Input = forwardRef(({ ...props }, ref) => {
    return (

    <div className={`${Style.InputWidth} ${props.className} `}>
        <input name={props.name} ref={ref} onChange={props.onChange} required={props.required} type={props.type} placeholder={props.placeholder} className={`${props.className ? props.className : ""} ${props.Intype === "Search" ? Style.Search : props.Intype === "Login" ? Style.Login : props.Intype === "ModalInput" ? Style.ModalInput : ""}`}/>
        <div className={props.Intype === 'Search' ? Style.Icon : "hide"}></div>
    </div>

    );
});

export default Input;