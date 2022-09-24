import React from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import Button from '../../subcomponents/Buttons/Button';

const Register = (props) => {
    return (
        <div className={props.changeCards ? Style.SignupBack : Style.Signup}>
            <Input Intype='Login'/>
            <Input Intype='Login'/>
            <Input type='number' Intype='Login'/>
            <Input Intype='Login'/>
            <Button type='Primary' onClick={() => {props.setChangeCard(!props.changeCards)}}>Log In Rather?</Button>
        </div>
    );
};

export default Register;