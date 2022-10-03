import React from 'react';
import Style from './AddQuestion.module.scss';
import Input from '../Inputs/Input';

const AddQuestion = () => {
    return (
        <div className={Style.addQuestionCard}>
            <div className={Style.close}></div>

            <Input Intype="Login"/>
            
        </div>
    );
};

export default AddQuestion;