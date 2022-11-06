import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FlaggedQuestions from '../FlaggedQuestions/FlaggedQuestions';
import Style from "./Admin.module.scss";


const Admin = (props) => {

    const [Flagged, setFlagged] = useState();

 


    useEffect(() => {
       
    
          axios.get("http://localhost:2000/api/allQuestions").then((res) => {
            let data = res.data;
            console.log(data);


            const flagged = data.filter(data => data.reported)
            console.log(flagged)

           let rendeFlagged = flagged.map((item) => {
            < FlaggedQuestions 
                key={item._id}
                userId={item.userId}
                questionId={item._id}
                allData={item}
            />
                
           });

           setFlagged(rendeFlagged)
          });
        
      }, []);

    return (
        <div className={props.AdminModal ? "hide" : Style.BackgroundBlur}>
            <div className={Style.close} onClick={() => {props.setAdminModal(true)}}>X</div>
            
            <div className={Style.Modal}>
            <h1 className={Style.flaggedName}>Flagged Questions</h1>
                {/* <div className={Style.FlaggedQuestion}></div> */}
                {/* < FlaggedQuestions /> */}
                {/* <div>hehe</div> */}
                {Flagged}

                

            </div>
            
        </div>
    );
};

export default Admin;