import React, { useState } from "react";
import Style from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const [Checked, setChecked] = useState(false);

  return (
    <div className={Style.CheckContainer}>
      <div
        onClick={() => {
          setChecked(!Checked);
        }}
        className={Checked ? Style.Checked : Style.Unchecked}
      ></div>
      <h4 className={Style.Text}>Javascript</h4>
    </div>
  );
};

export default CheckBox;
