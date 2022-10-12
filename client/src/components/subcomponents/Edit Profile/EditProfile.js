import React from "react";
import Style from "./EditProfile.module.scss";
import Input from "../Inputs/Input";
import Button from "../../subcomponents/Buttons/Button";



const EditProfile = (props) => {

    const UserData = JSON.parse(sessionStorage.getItem("UserData"))

    console.log(UserData)



    const closeModal = () => {
        props.rerender();
    };


    return (
        <>
            <div className={Style.backGroundModal}>
            
                <div className={Style.EditProfile}>

                <div className={Style.closeButton} onClick={closeModal}>
                        <div>x</div>
                    </div>

                    <div className={Style.Image}>
                    <input type="file" name="image"  />
                    </div>

                    <Input
                        Intype="ModalInput"
                        placeholder={UserData.username}
                        name="questionTitle"
                    // onChange={questionInfo}
                    />


                    <Input
                        Intype="ModalInput"
                        placeholder={UserData.email}

                        name="questionTitle"
                    // onChange={questionInfo}
                    />

                    


                    <Button type="Primary" >
                        Edit Profile
                    </Button>


                    

                    <div className={Style.Del}> <h5>Delete Profile</h5></div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
