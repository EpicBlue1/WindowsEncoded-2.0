import React, { useRef } from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import axios from 'axios';
import Button from '../../subcomponents/Buttons/Button';
import ForgetPassword from '../../subcomponents/ForgetPassword/ForgetPassword';
import {useState} from 'react';
import { Link } from "react-router-dom";

const Login = (props) => {

    const email = useRef(),
    password = useRef()

    const [forgotPassword, setForgotPassword] = useState(false)

    const [CredentialsVal, setCredentialsVal] = useState(''),
    [emailValid, setEmailValid] = useState(''),
    [passwordValid, setPasswordValid] = useState('')

    const [EmailText, setEmailText] = useState(),
    [PasswordText, setPasswordText] = useState(),
    [FormText, setFormText] = useState()


    //Validation
    const FormValues = () => {
        //Email
        let Emailregex = new RegExp('[0-9]+@virtualwindow.co.za');
        if(!Emailregex.test(email.current.value)){
            setEmailValid(false);
            setEmailText('Please enter your student email (Student number + virtualwindow.co.za)');
        } else {
            setEmailValid(true);
        }

        if(email.current.value === ''){
            setEmailValid('');
        }

        //Password
        if(!password.current.value.length > 0){
            setPasswordValid(false);
            setPasswordText('Please enter Password');
        } else {
            setPasswordValid(true);
            setPasswordText('All good');
        }

        // if(password.current.value === ''){
        //     setPasswordValid('');
        // }
    }

    const login = (e) => {
        e.preventDefault();
        // const newProduct = new FormData()
        if(password.current.value !== '' && password.current.value !== ''){
            let userCreds = {
                email: email.current.value,
                password: password.current.value,
            }
    
            axios.post('http://localhost:2000/login', userCreds)
            .then((res) => {
                console.log(res.data.Message);
                console.log(res);
                    if(res.data.Message === 'Valid'){
                        
                    } else {
                        setFormText("Password or Email doesn't match")
                    }
                // form.current.reset();
                // setRender(prev => !prev)
            }).catch((err) => {
                console.log(err)
            })
            // props.setShow(false);
        } else {
            setFormText("Please add your details");
            setEmailText('Please enter your student email (Student number + virtualwindow.co.za)');
            setPasswordText('Please enter Password');
            setPasswordValid(false);
            setEmailValid(false)
        }
    }

    return (
        <>
        <div className={props.changeCards ? Style.Login : Style.LoginBack}>
            <div className={Style.closeButton}>
                <Link to="/">
                    <div onClick={() => {props.setShowNav(true)}}>x</div>
                </Link>
            </div>
        <ForgetPassword forgotPassword={forgotPassword} setForgotPassword={setForgotPassword}/>
            <div className={Style.LogLeft}>
                <h1 className={Style.Spacing}>Welcome back!</h1>
            <br></br>
                <form onChange={FormValues}>
                    <Input text={EmailText} Valid={emailValid} ref={email} placeholder='Email' className={Style.margin} Intype='Login'/>

                    <Input text={PasswordText} Valid={passwordValid} ref={password} placeholder='Password' className={Style.margin} Intype='Login'/>
                </form>
            <br></br>
                <p className={Style.Red}>{FormText}</p>
                <p onClick ={()=> {setForgotPassword(true)}}>Forgot Password?</p>
            
                <p className={Style.Spacing} onClick={() => {props.setChangeCard(!props.changeCards)}}>Don't have an account? Register now!</p>

                <Button onClick={login} className={Style.Button} type='Primary'>Log In</Button>
            </div>
            <div className={Style.LogRight}>
                <div className={Style.LogImage}></div>
                <a href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#query=coding&position=17&from_view=search">Image by storyset on Freepik</a> 
            </div>

        </div>
        </>
    );
};

export default Login;