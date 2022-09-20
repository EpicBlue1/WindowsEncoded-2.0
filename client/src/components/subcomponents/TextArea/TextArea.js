import React from 'react';
import Style from './TextArea.module.scss'

const TextArea = (props) => {
    return (
    <textarea className={`${props.classname} ${Style.DefaultStyle}`} value={props.children}>  </textarea>
    );
};

export default TextArea;