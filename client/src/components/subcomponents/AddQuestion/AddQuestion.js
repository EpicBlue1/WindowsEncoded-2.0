import React, { useState } from 'react';
import Style from './AddQuestion.module.scss';
import Input from '../Inputs/Input';
import Button from '../../subcomponents/Buttons/Button';
import axios from 'axios';

const AddQuestion = (props) => {

    const [questionInputs, setQuestionInputs] = useState();
    const [questionImage, setQuestionImage] = useState();

    const closeModal = () => {
        props.rerender()
    }

    const questionInfo = (e) => {
        const {name, value} = e.target;
        setQuestionInputs({...questionInputs, [name]: value});
    }

    const getImage = (e) =>{

        let imageFile = e.target.files[0];
        setQuestionImage(imageFile);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('prev_img');
            output.src = reader.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const addQuestion = (e) => {
        e.preventDefault()
        // console.log(questionInputs);
        // console.log(image);

        const payloadData = new FormData();

        let payload = {
            questionTitle: questionInputs.questionTitle,
            questionDescription: questionInputs.questionDescription,
            codeSnippet: questionInputs.codeSnippet,
        }

        console.log(payload);

        payloadData.append("information", JSON.stringify(payload));
        payloadData.append("image", questionImage);

        axios.post('http://localhost:2000/api/newQuestion', payloadData);
        props.rerender()
    }

    return (
        <div className={Style.BackgroundBlur}>
            <div className={Style.addQuestionCard}>

                <div className={Style.closeButton} onClick={closeModal}>
                    <div>x</div>
                </div>

                <form>
                    <h2>Add a Question</h2>

                    <Input Intype="ModalInput" placeholder="Title..." name="questionTitle" onChange={questionInfo}/>

                    <div className={Style.PfBlockUp}>
                        <div className={Style.upload_btn_wrapper}>
                            <img id='prev_img'/>
                            <button className={Style.btn}>Upload a file</button>
                            <input type="file" name="image" onChange={getImage}/>
                        </div>                
                    </div>

                    <textarea className={Style.textBox} name="questionDescription" onChange={questionInfo}></textarea>
                    <textarea className={Style.codeBox} name="codeSnippet" onChange={questionInfo}></textarea>

                    <Button type="Primary" onClick={addQuestion}>Add Question</Button>
                </form>
            </div>
        </div>
    );
};

export default AddQuestion;