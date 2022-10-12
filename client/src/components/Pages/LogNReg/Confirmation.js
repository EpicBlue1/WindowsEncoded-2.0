import React, { useState } from "react";
import Button from "../../subcomponents/Buttons/Button";
import Style from "./LogNReg.module.scss";

const Confirmation = (props) => {
  //   const [Confirm, setConfirm] = useState(props.showConfirm);

  return (
    <div
      ref={props.confirmDiv}
      className={
        props.showConfirm ? Style.ConfirmationStart : Style.Confirmation
      }
    >
      <h1>Your almost in!</h1>
      <h3>Make sure you check your email before you continue to log in!</h3>
      <Button
        onClick={() => {
          props.setShowConfirm(!props.showConfirm);
          console.log("Lol");
        }}
        type="Primary"
      >
        Ok
      </Button>
    </div>
  );
};

export default Confirmation;
