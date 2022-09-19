import React from 'react';
import Style from './Input.module.scss'

const Input = (props) => {
    return (
        <input className={`${props.className ? props.className : ""}${props.type === "Search" ? Style.Search : ""}`}/>
    );
};

export default Input;