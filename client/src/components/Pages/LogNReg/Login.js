import React from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';

const Login = (props) => {
    return (
        <div className={props.changeCards ? Style.Login : Style.LoginBack}>
            <Input className={Style.margin} Intype='Login'/>
            <Input Intype='Login'/>
            <Input type='number' Intype='Login'/>
            <Input Intype='Login'/>
            <button onClick={() => {props.setChangeCard(!props.changeCards)}}>Sign Up Rather?</button>
        </div>
    );
};

export default Login;