import React, { useState } from 'react';
import QuestionTag from '../QuestionTag/QuestionTag';
import Style from './ProfileQuestion.module.scss'
import DeleteModal from '../DeleteModal/DeleleModal';
import EditQuestion from '../EditQuestion/EditQuestion';

const ProfileQuestion = (props) => {

    let QuesData = props.alldata;

    const [deleteModal, setDeleteModal] = useState();
    const [editModal, setEditModal] = useState();

    const deleteAltert = () => {
        setDeleteModal(<DeleteModal rerender={setDeleteModal} questionId={QuesData._id}/>);
    }

    const editQuestion = () => {
        setEditModal(<EditQuestion rerender={setEditModal} allQuestionData={QuesData}/>);
    }

    return (
        <>
        {deleteModal}
        {editModal}
        <div className={Style.ProfQ}>
            <h1 className={Style.Qtitle}>{QuesData.questionTitle}</h1>

            <div className={Style.TagSection}>
            <QuestionTag/>
            <QuestionTag/>
            <QuestionTag/>
            </div>

            <div className={Style.DeleteButton} onClick={deleteAltert}></div>
            <div className={Style.EditButton} onClick={editQuestion}></div>
        </div>
        </>
    );
};

export default ProfileQuestion;