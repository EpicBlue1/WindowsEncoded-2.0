import React from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';

const Register = (props) => {
    return (
        <div className={props.changeCards ? Style.SignupBack : Style.Signup}>
            <Input Intype='Login'/>
            <Input Intype='Login'/>
            <Input type='number' Intype='Login'/>
            <Input Intype='Login'/>
            <button onClick={() => {props.setChangeCard(!props.changeCards)}}>Log In Rather?</button>
        </div>
    );
};

export default Register;