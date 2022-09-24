import React, { useEffect, useRef, useState } from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import Button from '../../subcomponents/Buttons/Button';

const Register = (props) => {

    return (
        <>
            <div className={props.changeCards ? Style.SignupBack : Style.Signup}>
            <h1 className={Style.Spacing}>Register!</h1>
                <Input placeholder='Username' Intype='Login'/>
                <Input placeholder='Email' Intype='Login'/>
                <Input placeholder='Password' Intype='Login'/>
                <Input  className={Style.Spacing} placeholder='Confirm Password' Intype='Login'/>
                <Button type='Primary'>Log In Rather?</Button>
                <p onClick={() => {props.setChangeCard(!props.changeCards)}}>Already have an account? Login now!</p>
            </div>

            <div className={props.changeCards ? Style.SignupTextBack : Style.SignupText}>
                <h2>About WindowsEncoded</h2>
                <p>Aut inventore consequuntur et rerum doloremque.</p>
                <ul>
                    <li>Ask Questions</li>
                    <li>Get Answers</li>
                    <li>Answers Questions</li>
                    <li>Profile Progression</li>
                    <li>Earn badges</li>
                </ul>
                <p>Completely anonymous!</p>
                <p>Only Requirement is an OW account</p>
            </div>
        </>

    );
};

export default Register;