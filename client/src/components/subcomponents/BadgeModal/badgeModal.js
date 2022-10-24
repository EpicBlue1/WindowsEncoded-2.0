import React from 'react';
import Style from './badgeModal.module.scss'


const badgeModal = () => {
    return (
        <div className={Style.BackgroundBlur}>
            <div className={Style.BadgeModal}></div>
            
        </div>
    );
};

export default badgeModal;

{/* <div className={Style.BackgroundBlur}>
<div className={Style.DeleteModal}>

  <div className={Style.Warning}></div>

  <h2>Are you sure you want to delete this question?</h2>
  <Button type="Primary" onClick={noThanks}>No, thanks</Button>
  <button className={Style.WarningButton} onClick={deleteQuestion}>Delete</button>
</div>
</div> */}