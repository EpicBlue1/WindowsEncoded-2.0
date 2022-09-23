import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Style from './LogNReg.module.scss';

const LogNReg = () => {

    const [changeCards, setChangeCard] = useState(true);

    return (
        <div className={Style.LogNReg}>
            <Register changeCards={changeCards} setChangeCard={setChangeCard}/>
            <Login changeCards={changeCards} setChangeCard={setChangeCard}/>
        </div>
    );
};

export default LogNReg;