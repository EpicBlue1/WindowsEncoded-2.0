import React from 'react';
import TopNav from '../../subcomponents/TopNav/TopNav';
import LeftNav from '../../subcomponents/LeftNav/LeftNav';
import Style from './IndividualQuestion.module.scss';
import CodeArea from '../../subcomponents/CodeArea/CodeArea';
import TextArea from '../../subcomponents/TextArea/TextArea';
import Answer from '../../subcomponents/Answers/Answers';
import VotingSystem from '../../subcomponents/VotingSystem/VotingSystem';

const IndividualQuestion = () => {

    const code = '<div className={Question ? Questiontrue : Questionfalse}></div>';

    return (
        // <div className={Style.body}>

            <div className={Style.questionBlock}>

                <div className={Style.left}>
                    <VotingSystem/>
                </div>

                <div className={Style.questionIntro}>
                    <div className={Style.profileImg}></div>
                    <p className={Style.username}>Username</p>
                    <br/>
                    <h2 className={Style.heading}>Question Title</h2>
                </div>

                <div className={Style.questionDetails}>
                    <div className={Style.questionImage}></div>
                    <p className={Style.questionDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna lacus, accumsan ac felis quis, malesuada sollicitudin mi. Aenean at tempor dolor. Donec pellentesque metus id lorem lacinia hendrerit. In odio justo, finibus vel nibh vel, iaculis rhoncus eros. Etiam accumsan posuere finibus. Phasellus tempus justo nec dui sagittis auctor. Sed tempus sem purus, sed sodales ipsum aliquam non. Proin lacus eros, fermentum quis felis sodales, gravida tempus metus. Nam egestas laoreet diam, nec fermentum nunc tincidunt ac questionDescription
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna lacus, accumsan ac felis quis, malesuada sollicitudin mi. Aenean at tempor dolor. Donec pellentesque metus id lorem lacinia hendrerit. In odio justo, finibus vel nibh vel, iaculis rhoncus eros. Etiam accumsan posuere finibus. Phasellus tempus justo nec dui sagittis auctor. Sed tempus sem purus, sed sodales ipsum aliquam non. Proin lacus eros, fermentum quis felis sodales, gravida tempus metus. Nam egestas laoreet diam, nec fermentum nunc tincidunt ac questionDescription
                    </p>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <CodeArea language="html" className="CodeArea">{code}</CodeArea>

                    <hr className={Style.horisontalLine}/>
                    <h2 className={Style.heading}>Answer Question</h2>
                    <TextArea/>

                    <hr className={Style.horisontalLine}/>
                    <h2 className={Style.heading}>Answers</h2>
                    <Answer/>
                </div>
            </div>
        // </div>
    );
};

export default IndividualQuestion;