import React from 'react';
import Button from '../../subcomponents/Buttons/Button';
import Input from '../../subcomponents/Inputs/Input';
import CodeArea from '../../subcomponents/CodeArea/CodeArea';
import TextArea from '../../subcomponents/TextArea/TextArea';
import QuestionCard from '../../Cards/QuestionCard/QuestionCard';

const Testpage = () => {

    const code = 'const lolos = lol'

    return (
        <div className='testPage'>
            <h1>Heading One - Buttons</h1>
            <Button type='Prime'>Primary Button</Button>
            <br></br>
            <Button type='Second'>Secondary Button</Button>
            <br></br>
            <Button>Tertiary Button</Button>

            <h2>Heading Two - Inputs</h2>
            <label>Search</label>
            <Input type="Search"  placeholder="Search"/>
            <br></br>
            <label>Primary Input</label>
            <Input/>
            <br></br>
            <br></br>
            <label>Code Area</label>
            <CodeArea language="javascript" className="CodeArea">{code}</CodeArea>

            <TextArea>lol</TextArea>
            <h3>Heading Two - Inputs</h3>
            <QuestionCard/>

            
        </div>
    );
};

export default Testpage;