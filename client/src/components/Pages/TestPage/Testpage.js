import React from 'react';
import Button from '../../subcomponents/Buttons/Button';
import Input from '../../subcomponents/Inputs/Input';
import CodeArea from '../../subcomponents/CodeArea/CodeArea';

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
            <Input/>
            <br></br>
            <label>Primary Input</label>
            <Input/>
            <label>Code Area</label>

            <CodeArea language="text" className="CodeArea">{code}</CodeArea>

            
        </div>
    );
};

export default Testpage;