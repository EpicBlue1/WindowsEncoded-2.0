import React from 'react';
import Style from './TopNav.module.scss';
import Input from '../Inputs/Input'


const TopNav = () => {
    return (
        <div className={Style.topNav}>
            <div className={Style.LOGO}></div>
            {/* <Input Intype="Search" className={Style.SearchBar}/> */}
            <div className={Style.SearchBar}>
                <Input Intype="Search" />
            </div>
            
            <div className={Style.ProfileImage}></div>
        </div>
    );
};

export default TopNav;