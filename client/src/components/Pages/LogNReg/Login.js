import React from 'react';
import Style from './LogNReg.module.scss';
import Input from '../../subcomponents/Inputs/Input';
import Button from '../../subcomponents/Buttons/Button';
import ForgetPassword from '../../subcomponents/ForgetPassword/ForgetPassword';
import {useState} from 'react';

const Login = (props) => {

    const [forgotPassword, setForgotPassword] = useState(false)

    return (
        <>
        <div className={props.changeCards ? Style.Login : Style.LoginBack}>
        <ForgetPassword forgotPassword={forgotPassword} setForgotPassword={setForgotPassword}/>
            <div className={Style.LogLeft}>
                <h1 className={Style.Spacing}>Welcome back!</h1>

                <Input placeholder='Email' className={Style.margin} Intype='Login'/>

                <Input placeholder='Password' className={Style.margin} Intype='Login'/>
                <br></br>
                <p onClick ={()=> {setForgotPassword(true)}}>Forgot Password?</p>
            
                <p className={Style.Spacing} onClick={() => {props.setChangeCard(!props.changeCards)}}>Don't have an account? Register now!</p>

                <Button className={Style.Button} type='Primary'>Log In</Button>
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