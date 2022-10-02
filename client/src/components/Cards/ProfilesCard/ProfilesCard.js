import React from 'react';
import Style from './ProfileCard.module.scss';
import Button from '../../subcomponents/Buttons/Button';

const ProfilesCard = (props) => {
    return (
        <>
        <div onClick={() => {props.setShowProfileModal(!props.ShowProfileModal)}} className={props.ShowProfileModal ? Style.Modal : 'hide'}>
        </div>
        <div className={props.ShowProfileModal ? Style.SelectModal : 'hide'}>
            <h1>Select Profile Picture</h1>
            <div className={Style.Container}></div>
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