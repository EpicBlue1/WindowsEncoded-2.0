import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FlaggedQuestions from '../FlaggedQuestions/FlaggedQuestions';
import Style from "./Admin.module.scss";


const Admin = (props) => {

    const [Flagged, setFlagged] = useState();

    // let renderQuestions = questionData.map((item) => (
    //     <QuestionCard
    //       key={item._id}
    //       userId={item.userId}
    //       username={item.username}
    //       questionId={item._id}
    //       questionTitle={item.questionTitle}
    //       questionDescription={item.questionDescription}
    //       codeSnippet={item.codeSnippet}
    //       language={item.language}
    //       image={URL + item.image}
    //       editRender={setRenderQuestions}
    //       allData={item}
    //     />
    //   ));

    //   setQuestions(renderQuestions);
    //   setRenderQuestions(false);


    useEffect(() => {
        // const USER = sessionStorage.getItem("UserData");
        // let user = JSON.parse(USER);
        // let UserId = user._id;
    
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
           


            
            // console.log(flagged);

            

            // if() {

            // } else() {

            // }
            // let render = setProfileQuestions(
            //   data
            //     .filter((filterData) => UserId === filterData.userId)
            //     // TODO: Rerender after editing
            //     .map((Ques) => (
            //       <ProfileQuestion
            //         key={Ques._id}
            //         alldata={Ques}
            //         updateRender={updateRender}
            //         setUpdateRender={setUpdateRender}
            //       />
            //     ))
            // );
            // let Qasked = data.filter(
            //   (filterData) => seshStorage._id === filterData.userId
            // );
            // setAskedQuestions(Qasked.length);
            // console.log(Qasked);
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