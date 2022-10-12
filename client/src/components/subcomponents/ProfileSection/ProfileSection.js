import { Axios } from 'axios';
import React, { useState } from 'react';
import EditProfile from '../Edit Profile/EditProfile';
import Style from './ProfileSection.module.scss'


const ProfileSection = (props) => {

    const [EditProfileModal, setEditProfileModal] = useState()
    const [modalArea, setModal] = useState();


    // const EditProfile = () => {
    //     let user = sessionStorage.getItem('UserData');

    //     console.log(user)
        
    //         // setEditProfileModal(<AddQuestion rerender={setAddQuestionModal}/>)
        
    // }
    const UserData = JSON.parse(sessionStorage.getItem("UserData"))

    console.log(UserData)

    const edit = () => {
        setModal(<EditProfile 
          close={setModal}
          username={UserData.username}
          email={UserData.email}
          password={UserData.password}
          profile={UserData.profile}

        //   id={props.productId}
        //   SKU={props.SKU}
        //   ProductName={props.ProductName}
        //   stock={props.stock}
        //   Price={props.Price}
        //   DiscPrice={props.DiscPrice}
        //   Desc={props.Desc}
        //   Sizes={props.Sizes}
        //   SizeOne={props.Sizes.sevenHalf}
        //   SizeTwo={props.Sizes.eight}
        //   SizeThree={props.Sizes.eightHalf}
        //   editRender={props.editRender}
        />)
      }

      const deleteItem = () => {
        // console.log(props.productId);
    
        // if(window.confirm("are you sure you want to delete: " + props.ProductName) === true){
        //   console.log("deleted Item")
    
        //   Axios.delete("http://localhost:5000/api/deleteproduct/" + props.productId)
        //   .then((res)=>{
        //     if(res){
        //       console.log("Deleted: " + props.ProductName);
        //       props.editRender(true);
        //       //alert or something saying it was deleted
        //     }
        //   })
        //   .catch(function (error) {console.log(error)});
        // } 
      }



    
    


    
    return (
        <>
        {modalArea}

        <div className={Style.MainProfileSection}>
            <div onClick={edit} className={Style.EditButton}>
            </div>
            
            <div className={Style.ProfileImages}>
                <div className={Style.ProfileImage}></div>
                <div className={Style.ProfileDisplayBadge}></div>
            </div>
            
            <h2 className={Style.Username}>{UserData.username}</h2>
            <h3 className={Style.MemberLength}>Member for 1 year, 2 months</h3>
            <div className={Style.Progress}> <h1>Score: {UserData.score}</h1> </div>

            <div className={Style.TotalAsked}>
                <h2 className={Style.Scores}>1</h2>
                <h3 className={Style.ScoreText}>Questions Asked</h3>
            </div>

            <div className={Style.TotalAnswered}>
                <h2 className={Style.Scores}>1</h2>
                <h3 className={Style.ScoreText}>Questions Answered</h3>
            </div>

            <div className={Style.ReliabilityScore}>
                <h2 className={Style.Scores}>1</h2>
                <h3 className={Style.ScoreText}>Reliability Score</h3>
            </div>
        </div>
        </>
    );
};

export default ProfileSection;