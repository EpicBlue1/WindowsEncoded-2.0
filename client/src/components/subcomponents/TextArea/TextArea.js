import React from 'react';

const TextArea = (props) => {
    return (
    <textarea className={props.classname} value={props.children}>  </textarea>
    );
};

export default TextArea;