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
            <h1>Heading One - Components</h1>
            <h2>Heading Two - Buttons</h2>
            <Button type='Primary'>Primary Button</Button>
            <br></br>
            <Button type='Secondary'>Secondary Button</Button>
            <br></br>
            <Button>Tertiary Button</Button>

            <h2>Heading Two - Inputs</h2>
            <h3>Heading Three - Search and Regular</h3>
            <p> Width based on parent (80%)</p>
            <Input Intype="Search"  placeholder="Search"/>
            <h3>Heading Three - Primary</h3>
            <p> Width based on parent (60%)</p>
            <Input Intype="Login"/>
            <h3>Heading Three - Code Area</h3>
            <p> Width based on parent (90%)</p>
            <CodeArea language="javascript" className="CodeArea">{code}</CodeArea>

            <h3>Heading Three - Text Area</h3>
            <p> Width based on parent (90%)</p>
            <TextArea></TextArea>

            <h2>Heading Two - QuestionCard</h2>
            <p> Width based on parent (80%)</p>
            <QuestionCard/>
        </div>
    );
};

export default Testpage;