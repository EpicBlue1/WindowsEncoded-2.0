import React, { forwardRef, useState } from "react";
import Style from "./CheckBox.module.scss";

const CheckBox = forwardRef(({ ...props }, ref) => {
  const [Checked, setChecked] = useState(false);

  return (
    <div data-value={Checked} className={Style.CheckContainer}>
      <div
        ref={ref}
        onClick={() => {
          setChecked(!Checked);
        }}
        className={Checked ? Style.Checked : Style.Unchecked}
      ></div>
      <h4 className={Style.Text}>{props.text}</h4>
    </div>
  );
});

export default CheckBox;
