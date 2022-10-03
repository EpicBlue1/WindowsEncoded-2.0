import React from 'react';
import Style from './AddQuestion.module.scss';
import AddImageIcon from '../../../Icons/user-plus.svg';
import Input from '../Inputs/Input';
import TextArea from '../TextArea/TextArea';

const AddQuestion = () => {
    return (
        <div className={Style.addQuestionCard}>

            <div className={Style.closeButton}>
                <div>x</div>
            </div>

            <h2>Add a Question</h2>

            <Input Intype="Login" placeholder="Title..."/>


            <div className={Style.Preview} style={{backgroundImage: `url(${AddImageIcon})`}}></div>
            <textarea className={Style.textBox}></textarea>
            
        </div>
    );
};

export default AddQuestion;