import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FlaggedQuestions from '../FlaggedQuestions/FlaggedQuestions';
import Style from "./Admin.module.scss";


const Admin = (props) => {

    // console.log(props);


    

    const [Flagged, setFlagged] = useState();
    
    
 
   
 


    useEffect(() => {
       
    
          axios.get("/api/allQuestions").then((res) => {
            let data = res.data;
            // console.log(data);
            

            const flagged = data.filter(data => data.reported)
            console.log(flagged)

           let rendeFlagged = flagged.map((item) => (
            <FlaggedQuestions
                key={item._id}
                QuesId={item._id}
                alldata={item}
            />
           ));

           setFlagged(rendeFlagged)
          });

          

            //   const deleteQuestion = () => {
        //     axios.delete('/api/deleteQuestion/' + data.questionId)
        //     .then(res => {
                
        //         alert('Your Question has been Deleted')
        //     })
        //     .catch(function(err) {console.log(err)});
        //   }
    
        // const DeleteQuestion = () => {
        //     window.confirm('Delete Question?')
        // }
        
      }, []);

      

    return (
        <div className={props.AdminModal ? "hide" : Style.BackgroundBlur}>
            <div className={Style.close} onClick={() => {props.setAdminModal(true)}}>X</div>
            
            <div className={Style.Modal}>
            <h1 className={Style.flaggedName}>Flagged Questions</h1>
                
                {Flagged}

                

            </div>
            
        </div>
    );
};

export default Admin;