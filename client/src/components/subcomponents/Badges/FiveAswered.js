import React, { useState } from "react";
import Style from "./Badges.module.scss";

const FiveAswered = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div
        onMouseEnter={() => setHide(false)}
        onMouseLeave={() => setHide(true)}
        className={Style.Box}
      >
        <div className={Style.FiveAnsweredBadge}></div>
        {/* <h4>Bronze </h4> */}
        <div className={hide ? "hide" : Style.Popup}>Five Answered</div>
      </div>
    </>
  );
};

export default FiveAswered;
