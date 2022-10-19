import React, { useRef, useState } from "react";
import Confirmation from "./Confirmation";
import Login from "./Login";
import Style from "./LogNReg.module.scss";
import Register from "./Register";

const LogNReg = (props) => {
  const confirmDiv = useRef();
  const [changeCards, setChangeCard] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [AreSure, setAreSure] = useState(
    "Make sure you check your email before you continue to log in!"
  );

  return (
    <div className={Style.LogNReg}>
      <Confirmation
        confirmDiv={confirmDiv}
        setShowConfirm={setShowConfirm}
        showConfirm={showConfirm}
        AreSure={AreSure}
      />
      <Register
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        changeCards={changeCards}
        setChangeCard={setChangeCard}
      />
      <Login
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        setShowNav={props.setShowNav}
        changeCards={changeCards}
        setChangeCard={setChangeCard}
        setAreSure={setAreSure}
        AreSure={AreSure}
      />
    </div>
  );
};

export default LogNReg;
