import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../subcomponents/Buttons/Button";
import ForgetPassword from "../../subcomponents/ForgetPassword/ForgetPassword";
import Input from "../../subcomponents/Inputs/Input";
import Confirmation from "./Confirmation";
import Style from "./LogNReg.module.scss";
import show from "../../../Icons/eye-open.svg";
import hide from "../../../Icons/eye-closed.svg";

const Login = (props) => {
  const email = useRef(),
    password = useRef(),
    Navigate = useNavigate();

  const [forgotPassword, setForgotPassword] = useState(false);

  const [CredentialsVal, setCredentialsVal] = useState(""),
    [emailValid, setEmailValid] = useState(""),
    [passwordValid, setPasswordValid] = useState("");

  const [EmailText, setEmailText] = useState(),
    [PasswordText, setPasswordText] = useState(),
    [FormText, setFormText] = useState();

  //Hide and Show Password
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if(passwordType==="password"){
      setPasswordType("text");
      return;
    }
    setPasswordType("password")
  }

  //Validation
  const FormValues = () => {
    //Email
    let Emailregex = new RegExp("[0-9]+@virtualwindow.co.za");
    if (!Emailregex.test(email.current.value)) {
      setEmailValid(false);
      setEmailText(
        "Please enter your student email (Student number + virtualwindow.co.za)"
      );
    } else {
      setEmailValid(true);
    }

    if (email.current.value === "") {
      setEmailValid("");
      setFormText("");
    }

    //Password
    if (
      password.current.value.length !== 1 &&
      password.current.value.length <= 1
    ) {
      setPasswordValid(false);
      setPasswordText("Please enter Password");
    } else {
      setPasswordValid(true);
      setPasswordText("All good");
    }

    if (password.current.value === "") {
      setPasswordValid("");
      setFormText("");
    }
  };

  const login = (e) => {
    e.preventDefault();
    // const newProduct = new FormData()
    if (password.current.value !== "" && password.current.value !== "") {
      let userCreds = {
        email: email.current.value,
        password: password.current.value,
      };

      axios
        .post("http://localhost:2000/api/login/", userCreds)
        .then((res) => {
          if (res.data.valid) {
            setFormText("");
            setEmailValid(true);
            setPasswordValid(true);
            setPasswordText("All Good");
            setEmailText("All Good");
            sessionStorage.setItem(
              "UserData",
              JSON.stringify(res.data.userData)
            );
            Navigate("/");
          } else {
            setFormText(res.data.msg);
            setEmailValid(false);
            setPasswordValid(false);
            setPasswordText("Double Check Password");
            setEmailText("Double Check Email");
          }
          // form.current.reset();
          // setRender(prev => !prev)
        })
        .catch((err) => {
          console.log(err);
        });
      // props.setShow(false);
    } else {
      setFormText("Please add your details");
      setEmailText(
        "Please enter your student email (Student number + virtualwindow.co.za)"
      );
      setPasswordText("Please enter Password");
      setPasswordValid(false);
      setEmailValid(false);
    }
  };

  return (
    <>
      <Confirmation />
      <div className=""></div>
      <div className={props.changeCards ? Style.Login : Style.LoginBack}>
        <div className={Style.closeButton}>
          <div
            className={Style.White}
            onClick={() => {
              props.setShowConfirm(true);
              props.setAreSure(
                "Are you sure? You wont be able to ask or answer questions."
              );
            }}
          >
            x
          </div>
        </div>
        <ForgetPassword
          forgotPassword={forgotPassword}
          setForgotPassword={setForgotPassword}
        />
        <div className={Style.LogLeft}>
          <h1 className={Style.Spacing}>Welcome back!</h1>
          <br></br>
          <form onChange={FormValues}>
            <Input
              type="email"
              text={EmailText}
              Valid={emailValid}
              ref={email}
              placeholder="Email"
              //className={Style.margin}
              Intype="Login"
            />

            <Input
              type={passwordType}
              text={PasswordText}
              Valid={passwordValid}
              ref={password}
              placeholder="Password"
              // className={Style.margin}
              Intype="Login"
            />
            <div className="passwordShow" onClick={togglePassword}>{ passwordType === "password" ? <img src={hide}/> : <img src={show}/> }</div>
          </form>
          <p className={Style.Red}>{FormText}</p>
          <p
            onClick={() => {
              setForgotPassword(true);   
            }}
          >
            Forgot Password?
          </p>
          <br></br>
          <Button onClick={login} className={Style.Button} type="Primary">
            Log In
          </Button>
          <br></br>
          <br></br>
          <p
            className={Style.Spacing}
            onClick={() => {
              props.setChangeCard(!props.changeCards);
            }}
          >
            Don't have an account? Register now!
          </p>
        </div>
        <div className={Style.LogRight}>
          <div className={Style.LogImage}></div>
          <a href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#query=coding&position=17&from_view=search"></a>
        </div>
      </div>
    </>
  );
};

export default Login;
