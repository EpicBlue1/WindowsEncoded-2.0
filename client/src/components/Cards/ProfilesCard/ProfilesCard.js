import React from 'react';
import Style from './ProfileCard.module.scss';
import Button from '../../subcomponents/Buttons/Button';
import ProfileTemp from '../../../Img/LogInIllustration.jpg' 

const ProfilesCard = (props) => {
    return (
        <>
        <div onClick={() => {props.setShowProfileModal(!props.ShowProfileModal)}} className={props.ShowProfileModal ? Style.Modal : 'hide'}>
        </div>
        <div className={props.ShowProfileModal ? Style.SelectModal : 'hide'}>
            <h1>Select Profile Picture</h1>
            <div className={Style.Container}>
            <div className={Style.PfBlock}  style={{backgroundImage: `url(${ProfileTemp})`}}></div>
            <div className={Style.PfBlock}  style={{backgroundImage: `url(${ProfileTemp})`}}></div>
            <div className={Style.PfBlock}  style={{backgroundImage: `url(${ProfileTemp})`}}></div>
                <div className={Style.PfBlockUp}>
                <div class={Style.upload_btn_wrapper}>
                    <button class={Style.btn}>Upload a file</button>
                    <input type="file" name="myfile" />
                </div>                
            </div>

            </div>
            <br></br>
            <Button type='Primary'>Select</Button>
            <br></br>
            <br></br>
            <Button onClick={() => {props.setShowProfileModal(!props.ShowProfileModal)}} type='Secondary'>Cancel</Button>
        </div>
        </>

    );
};

export default ProfilesCard;