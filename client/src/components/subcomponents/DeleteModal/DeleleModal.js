import React from "react";
import Button from "../Buttons/Button";
import Style from "./DeleteModal.module.scss";

const DeleteModal = (props) => {

  const noThanks = () => {
    props.rerender();
  };

  return (
    <div className={Style.BackgroundBlur}>
      <div className={Style.DeleteModal}>

        <div className={Style.Warning}></div>

        <h2>Are you sure you want to delete this question?</h2>
        <Button type="Primary" onClick={noThanks}>No, thanks</Button>
        <button className={Style.WarningButton}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;