import React from 'react';
import Style from './Landing.module.scss'
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import TopNav from '../../subcomponents/TopNav/TopNav';


const Landing = () => {
    return (
    
      <div className={Style.body}>
      <TopNav/>
      <LeftNav/>
            
        </div>
    );
};

export default Landing;