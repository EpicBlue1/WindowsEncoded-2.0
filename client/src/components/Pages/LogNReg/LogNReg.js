import React, { useRef, useState } from "react";
import Confirmation from "./Confirmation";
import Login from "./Login";
import Style from "./LogNReg.module.scss";
import Register from "./Register";

const LogNReg = (props) => {
  const confirmDiv = useRef();
  const [changeCards, setChangeCard] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={Style.LogNReg}>
      <Confirmation
        confirmDiv={confirmDiv}
        setShowConfirm={setShowConfirm}
        showConfirm={showConfirm}
      />
      <Register
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        changeCards={changeCards}
        setChangeCard={setChangeCard}
      />
      <Login
        setShowNav={props.setShowNav}
        changeCards={changeCards}
        setChangeCard={setChangeCard}
      />
    </div>
  );
};

export default LogNReg;
