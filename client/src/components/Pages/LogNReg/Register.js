import React, { useEffect, useRef, useState } from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import axios from 'axios';
import Button from '../../subcomponents/Buttons/Button';
import AddImageIcon from '../../../Icons/user-plus.svg';
import ProfilesCard from '../../Cards/ProfilesCard/ProfilesCard';

const Register = (props) => {

    const Image = useRef(),
    username = useRef(),
    email = useRef(),
    password = useRef()

    const [PreviewImage, setPreviewImage] = useState(AddImageIcon),
    [PreviewText, setPreviewText] = useState('No image selected'),
    [ShowProfileModal, setShowProfileModal] = useState(false)

    const addUser = (e) => {
        e.preventDefault();
        // const newProduct = new FormData()

        let userCreds = {
            email: email.current.value,
            username: username.current.value,
            accStatus: false,
            password: password.current.value,
            profile: "profile",
            score: 50,
            admin: false,
        }

        // newProduct.append('prodInfo', JSON.stringify(product));
        // newProduct.append('prodImage', Image);

        axios.post('http://localhost:2000/register', userCreds)
        .then((res) => {
            console.log(res.data);
            // form.current.reset();
            // setRender(prev => !prev)
        }).catch((err) => {
            console.log(err)
        })

        // props.setShow(false);
    }

    return (
        <>
            <ProfilesCard ShowProfileModal={ShowProfileModal} setShowProfileModal={setShowProfileModal}/>
            <div className={props.changeCards ? Style.SignupBack : Style.Signup}>
            <h1 className={Style.Spacing}>Register!</h1>
            <form className={Style.Form}>
                <div onClick={() => {setShowProfileModal(!ShowProfileModal)}} className={Style.Preview} style={{backgroundImage: `url(${PreviewImage})`}}></div>
                <p><b>{PreviewText}</b></p>
                <Input ref={username} required='true' placeholder='Username' Intype='Login'/>
                <Input ref={email} required='true' placeholder='Email' Intype='Login'/>
                <Input ref={password} required='true' placeholder='Password' Intype='Login'/>
                <Input required='true'  className={Style.Spacing} placeholder='Confirm Password' Intype='Login'/>
                <p onClick={() => {props.setChangeCard(!props.changeCards)}}>Already have an account? Login now!</p>
                <Button onClick={addUser} type='Primary'>Register</Button>
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