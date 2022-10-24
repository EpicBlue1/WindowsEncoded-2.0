import React, { useState } from 'react';
import Style from './Badges.module.scss'
import badgeModal from '../BadgeModal/badgeModal';

const Badges = () => {

    // const [modalArea, setModal] = useState();

    // const BadgeInfo =() => {
    //     setModal(
    //         <badgeModal

    //         />
    //     )
    // }


    return (
<>
        {/* {modalArea}

        <div className={Style.BadgeBox} onClick={BadgeInfo} >
            
                <div className={Style.Badge} ></div>
                <h4>Gold Badge</h4>
        </div> */}

        <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h4>Gold Badge</h4>
        </div>


        </>

        
    );
};

export default Badges;