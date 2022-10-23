import React, { useState } from 'react';
import QuestionTag from '../QuestionTag/QuestionTag';
import Style from './ProfileQuestion.module.scss'
import DeleteModal from '../DeleteModal/DeleleModal';


const ProfileQuestion = (props) => {

    let QuesData = props.alldata;
    console.log(QuesData)

    const [deleteModal, setDeleteModal] = useState();

    const deleteAltert = () => {
        setDeleteModal(<DeleteModal rerender={setDeleteModal} />);
    }

    return (
        <>
        {deleteModal}
        <div className={Style.ProfQ}>
            <h1 className={Style.Qtitle}>{QuesData.questionTitle}</h1>

            <div className={Style.TagSection}>
            <QuestionTag/>
            <QuestionTag/>
            <QuestionTag/>
            </div>

            <div className={Style.DeleteButton} onClick={deleteAltert}></div>
            <div className={Style.EditButton}></div>

            {/* <div className={Style.Qscore}>
                <h1 className={Style.Score}>1</h1>
            </div> */}
        </div>
        </>
    );
};

export default ProfileQuestion;