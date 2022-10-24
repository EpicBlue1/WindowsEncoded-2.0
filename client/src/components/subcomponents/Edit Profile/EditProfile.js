import React, { useState } from "react";
import Style from "./EditProfile.module.scss";
import Input from "../Inputs/Input";
import Button from "../../subcomponents/Buttons/Button";
import axios from "axios";



const EditProfile = (props) => {



    let seshStorage = JSON.parse(sessionStorage.getItem("UserData"));

    const closeModal = () => {
        props.rerender();
    };


    let ProfileData = seshStorage;

    // console.log(ProfileData);

    let editFormValues = {
        username: ProfileData.username
    }

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) => {
        const {name, value} = e.target;
        setEditValues({...editValues, [name]: value});
     }

    const updateProfile = (e) => {
        e.preventDefault();
        let ProfileId = ProfileData._id;
        console.log(ProfileId);

        axios.patch('http://localhost:2000/api/updateProfile/' + ProfileId, editValues)
        .then(res => {
            console.log(res);
            if(res){
                console.log("Profile Updated");
                props.rerender();
            }
        })
        .catch(function(err) {console.log(err)});
    }
 
  




    return (
        <>
            <div className={Style.backGroundModal}>
            
                <div className={Style.EditProfile}>

                <div className={Style.closeButton} onClick={closeModal}>
                        <div>x</div>
                    </div>

                    {/* <div className={Style.Image}>
                    <input type="file" name="image"  />
                    </div> */}

                    <Input
                    Intype="ModalInput"
                    name="username" 
                    defaultValue={ProfileData.username} 
                    onChange={updateValues}
                    
                    />


                    {/* <Input
                        Intype="ModalInput"
                        placeholder={ProfileData.email}
                    /> */}

                    


                    <Button type="Primary" onClick={updateProfile}>
                        Edit Profile
                    </Button>


                    

                    <div className={Style.Del}> <h5>Delete Profile</h5></div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
