import React from 'react';
import Style from './TopNav.module.scss';
import Input from '../Inputs/Input'
import { Link } from 'react-router-dom';


const TopNav = (props) => {
    return (
    <div className={props.show? Style.Bounds : "hide"}>
        <div className={props.show? Style.topNav  : "hide"}>
            <div className={Style.LOGO}></div>
            {/* <Input Intype="Search" className={Style.SearchBar}/> */}
            <Input className='Search' Intype="Search" />
            
            <Link to="/Profile">
                <div className={Style.ProfileImage}></div>
            </Link>
        </div>
    </div>
    );
};

export default TopNav;