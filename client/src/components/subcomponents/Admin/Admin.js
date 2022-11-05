import React from 'react';
import FlaggedQuestions from '../FlaggedQuestions/FlaggedQuestions';
import Style from "./Admin.module.scss";


const Admin = (props) => {

    return (
        <div className={props.AdminModal ? "hide" : Style.BackgroundBlur}>
            <div className={Style.close} onClick={() => {props.setAdminModal(true)}}>X</div>
            
            <div className={Style.Modal}>
            <h1 className={Style.flaggedName}>Flagged Questions</h1>
                {/* <div className={Style.FlaggedQuestion}></div> */}
                < FlaggedQuestions />
                {/* <div>hehe</div> */}

                

            </div>
            
        </div>
    );
};

export default Admin;