import React from 'react';
import Style from './Questions.module.scss';
import TopNav from '../../subcomponents/TopNav/TopNav';
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import Button from '../../subcomponents/Buttons/Button';

const Questions = () => {
    return (
        <div className={Style.body}>
            <TopNav/>
            <LeftNav/>
            
            <div className={Style.questionBlock}>
                <Button className={Style.addButton} type="Primary">+</Button>
            </div>
        </div>
    );
};

export default Questions;