import React from 'react';
import Style from './Landing.module.scss'
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import TopNav from '../../subcomponents/TopNav/TopNav';



const Landing = () => {
    return (
      <div className={Style.body}>
        <TopNav/>
        <LeftNav/>  

        <div className={Style.LandingArea}>
            <div className={Style.Block}></div>
            <h2 className={Style.heading}>HELLO, USER!</h2>
            <p className={Style.Paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...s</p>
        </div>
    </div>
    );
  
};


export default Landing;