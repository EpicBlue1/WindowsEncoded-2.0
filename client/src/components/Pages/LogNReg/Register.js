import React, { useEffect, useRef, useState } from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import Button from '../../subcomponents/Buttons/Button';
import AddImageIcon from '../../../Icons/user-plus.svg';

const Register = (props) => {

    const Image = useRef()

    const [PreviewImage, setPreviewImage] = useState(AddImageIcon),
    [PreviewText, setPreviewText] = useState('No image selected')

    const ImagePreview = () => {

    }

    return (
        <>
            <div className={props.changeCards ? Style.SignupBack : Style.Signup}>
            <h1 className={Style.Spacing}>Register!</h1>
            <form className={Style.Form}>
                <div className={Style.Preview} style={{backgroundImage: `url(${PreviewImage})`}}></div>
                <p><b>{PreviewText}</b></p>
                <Input required='true' placeholder='Username' Intype='Login'/>
                <Input required='true' placeholder='Email' Intype='Login'/>
                <Input required='true' placeholder='Password' Intype='Login'/>
                <Input required='true'  className={Style.Spacing} placeholder='Confirm Password' Intype='Login'/>
                <p onClick={() => {props.setChangeCard(!props.changeCards)}}>Already have an account? Login now!</p>
                <Button type='Primary'>Register</Button>
            </form>
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