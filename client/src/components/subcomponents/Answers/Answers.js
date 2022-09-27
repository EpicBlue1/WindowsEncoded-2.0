import React from 'react';
import { useNavigate } from 'react-router-dom';
import VotingSystem from '../VotingSystem/VotingSystem';
import Style from './Answers.module.scss'

const Answer = () => {

    let navigate = useNavigate();

    const back = () => {
        navigate('/Questions');
    }

    return (
        <div className='Answer'>
            <VotingSystem className={Style.left}/>
            <p className={Style.answerText}><strong>Username </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna lacus, accumsan ac felis quis, malesuada sollicitudin mi. Aenean at tempor dolor. Donec pellentesque metus id lorem lacinia hendrerit. In odio justo, finibus vel nibh vel, iaculis rhoncus eros. Etiam accumsan posuere finibus. Phasellus tempus justo nec dui sagittis auctor. Sed tempus sem purus, sed sodales ipsum aliquam non. Proin lacus eros, fermentum quis felis sodales, gravida tempus metus. Nam egestas laoreet diam, nec fermentum nunc tincidunt ac questionDescription
                Lorem ipsum dolor sit ametnean at tempor dolorrem l nibh vel, iaculis rhoncus eros.
            </p>
        </div>
    );
};

export default Answer;