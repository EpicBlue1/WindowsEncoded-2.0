import React from 'react';
import Style from "./ProgressBar.module.scss";
import { Line, Circle } from 'rc-progress';


const ProgressBar = () => {
    return (
        <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
        // <div  className={Style.Parentdiv}>
        //     <div  className={Style.Childdiv}>
        //         <span className={Style.progresstext}></span>
        //     </div>
        // </div>
    );
};

export default ProgressBar;