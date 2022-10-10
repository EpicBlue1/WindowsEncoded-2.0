import React from 'react';
import Style from './TextArea.module.scss'

const TextArea = (props) => {
    return (
        <textarea className={`${props.classname} ${Style.DefaultStyle}`} name={props.name} value={props.children} placeholder={props.placeholder}>  </textarea>
    );
};

export default TextArea;