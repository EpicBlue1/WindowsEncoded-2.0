import React from 'react';
import Style from './ForgetPassword.module.scss';
import Input from '../Inputs/Input';
import { useState } from 'react';
import axios from 'axios';
import Button from '../Buttons/Button'


const ForgetPassword = (props) => {

    let defaultFormVals = ["email"];

    const [formValues, setFormValues] = useState(defaultFormVals);

    const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
}

const sendPassReset = (e) => {
    e.preventDefault();

    let payload = {
        email: formValues['email'],
    }
 console.log(payload)

    axios.post('http://localhost:2000/api/resetpass', payload)
    .then((res)=> {
      if(res){
        console.log(res); 
      }
    })
    .catch(function (error) {
      console.log(error);
    });

}

    return (
     <div className={ props.forgotPassword ? Style.BackgroundBlur : "hide"}>

       <div className={Style.ForgetPasswordCard}>  
            <div className={Style.close}></div>
            
            <div onClick= {()=> {props.setForgotPassword(false)}} className={Style.closeButton}>
                <div>x</div>
            </div>
            <h1>Forgot your password?</h1>

            <form onSubmit={sendPassReset}>
            <Input name="email" className={Style.input} Intype="Login" placeholder="Fill in your email..." onChange={getValues} />
            <div className={Style.space}>
            </div>
            <Button className="button" type="submit" >Send email</Button>
            </form>
           
            
        </div>
     

     </div>
    );
};

export default ForgetPassword;