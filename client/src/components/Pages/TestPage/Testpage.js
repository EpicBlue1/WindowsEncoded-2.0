import React from 'react';
import Button from '../../subcomponents/Buttons/Button';
import Input from '../../subcomponents/Inputs/Input';

const Testpage = () => {
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
        </div>
    );
};

export default Testpage;