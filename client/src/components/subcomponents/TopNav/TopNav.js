import React from 'react';
import Style from './TopNav.module.scss';
import Input from '../Inputs/Input'
import { Link } from 'react-router-dom';


const TopNav = () => {
    return (
        <div className={Style.topNav}>
            <div className={Style.LOGO}></div>
            {/* <Input Intype="Search" className={Style.SearchBar}/> */}
            <div className={Style.SearchBar}>
                <Input Intype="Search" />
            </div>
            
            <Link to="/Profile">
                <div className={Style.ProfileImage}></div>
            </Link>
            
        </div>
    );
};

export default TopNav;