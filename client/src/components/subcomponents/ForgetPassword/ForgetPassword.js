import React from 'react';
import Style from './ForgetPassword.module.scss';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button'


const ForgetPassword = (props) => {

    return (
     <div className={ props.forgotPassword ? Style.BackgroundBlur : "hide"}>

       <div className={Style.ForgetPasswordCard}>  
            <div className={Style.close}></div>
            
            <div onClick= {()=> {props.setForgotPassword(false)}} className={Style.closeButton}>
                <div>x</div>
            </div>
            <h1>Forgot your password?</h1>

            <Input className={Style.input} Intype="Login" placeholder="Fill in your email..."/>
            <div className={Style.space}>
            </div>
            <Button className="button" type="Primary" >Send email</Button>
            
        </div>
     

     </div>
    );
};

export default ForgetPassword;