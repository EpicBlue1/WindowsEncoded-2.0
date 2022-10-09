import React from "react";
import ProfileImg from "../../../Img/Bronze.png";
import QuestionCard from "../../Cards/QuestionCard/QuestionCard";
import Button from "../../subcomponents/Buttons/Button";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import Input from "../../subcomponents/Inputs/Input";
import ProfilePic from "../../subcomponents/ProfilePicture/ProfilePic";
import TextArea from "../../subcomponents/TextArea/TextArea";

const Testpage = () => {
  const code = "const lolos = lol";

  return (
    <div className="testPage">
      <h1>Heading One - Components</h1>
      <h2>Heading Two - Buttons</h2>
      <Button type="Primary">Primary Button</Button>
      <br></br>
      <Button type="Secondary">Secondary Button</Button>
      <br></br>
      <Button>Tertiary Button</Button>

      <h2>Heading Two - Inputs</h2>
      <h3>Heading Three - Search and Regular</h3>
      <div className="White-Box">
        <p> Width based on parent (80%)</p>
        <p> Needs White Background</p>
        <Input Intype="Search" placeholder="Search" />
      </div>
      <h3>Heading Three - Primary</h3>
      <p> Width based on parent</p>
      <Input Intype="Login" />
      <h3>Heading Three - ModalInput</h3>
      <p> Width based on parent </p>
      <Input Intype="ModalInput" />
      <h3>Heading Three - Code Area</h3>
      <p> Width based on parent (90%)</p>
      <CodeArea language="javascript" className="CodeArea">
        {code}
      </CodeArea>

      <h3>Heading Three - Text Area</h3>
      <p> Width based on parent (90%)</p>
      <TextArea></TextArea>

      <h2>Heading Two - QuestionCard</h2>
      <p> Width based on parent (80%)</p>
      <QuestionCard />

      <h2>Heading Two - Profile Pic Component</h2>
      <p>
        {" "}
        Needs to be inside of a div with 1:1 aspect ratio (eg, 50px by 50px)
      </p>
      <div className="ProfileContain">
        <ProfilePic ProfilePic={ProfileImg} ProfileIcon={ProfileImg} />
      </div>
    </div>
  );
};

export default Testpage;
