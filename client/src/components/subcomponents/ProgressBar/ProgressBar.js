import { Circle, Line } from "rc-progress";
import React from "react";
import Style from "./ProgressBar.module.scss";

const ProgressBar = () => {
  let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

  const value = seshStorage.score;
  const max = 100;

  console.log(value);

  return (
    <>
      <span>{(value / max) * 100}% Towards next badge !</span>
      <progress value={value} max={max} className={Style.bar} />
    </>
  );
};

export default ProgressBar;
