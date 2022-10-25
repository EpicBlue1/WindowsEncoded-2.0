import React, { useState } from 'react';
import Style from './Badges.module.scss'
import badgeModal from '../BadgeModal/badgeModal';

const Badges = (props) => {

    // const [modalArea, setModal] = useState();

    // const BadgeInfo =() => {
    //     setModal(
    //         <badgeModal

    //         />
    //     )
    // }


    return (
<>
        {/* {modalArea} */}

        {/* <div  className={`${props.className ? props.classname : ""} ${
        props.type === "BoxOne"
        ? Style.BoxOne
        : props.type === "BoxTwo"
        ? Style.BoxTwo
        : Style.tertiary
      }`}> */}

        <div className={`${Style.BoxOne} ${props.className}`}>        

        <div className={`${props.className ? props.classname : ""} ${
            props.type === "BadgeOne"
            ? Style.BadgeOne
            : props.type === "BadgeTwo"
            ? Style.BadgeTwo
            : Style.BadgeThree
        }`}
        
        >

        </div>
        <h4>Gold Badge</h4>

        </div>



        {/* <div 
        className={`${Style.InputWidth} ${props.className}`} 
        >

        </div>
                <h4>Gold Badge</h4>
        </div> */}

        {/* <div className={Style.BadgeBox}>
            <div className={Style.Badge}></div>
            <h4>Gold Badge</h4>
        </div> */}


        </>

        
    );
};

export default Badges;