import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProfileImg from "../../../Img/Bronze.png";
import QuestionCard from "../../Cards/QuestionCard/QuestionCard";
import Button from "../../subcomponents/Buttons/Button";
import CodeArea from "../../subcomponents/CodeArea/CodeArea";
import Input from "../../subcomponents/Inputs/Input";
import ProfilePic from "../../subcomponents/ProfilePicture/ProfilePic";
import TextArea from "../../subcomponents/TextArea/TextArea";

const Testpage = () => {
  const Profile = useRef();
  const FormVal = useRef();
  const code = "const lolos = lol";
  const [added, setAddded] = useState();
  const [Images, setImages] = useState();

  const addImage = (e) => {
    e.preventDefault();

    let Image = Profile.current.files[0];
    console.log(Image);

    const payloadData = new FormData();

    let payload = {
      imageName: Image.name,
    };

    // console.log(payload);
    payloadData.append("imgData", JSON.stringify(payload));
    payloadData.append("pfp", Image);

    axios.post("http://localhost:2000/api/addProfileImg", payloadData);
    setAddded(!added);
  };

  useEffect(() => {
    console.log("Updated");
    axios
      .get("http://localhost:2000/api/allProfiles/")
      .then((res) => {
        let data = res.data;
        console.log(res.data);

        let URL = `http://localhost:2000/ProfileImages/${data[0].imageLocation}`;
        console.log(URL);

        let images = data.map((item) => (
          <div
            style={{
              backgroundImage: `url(http://localhost:2000/ProfileImages/${item.imageLocation})`,
              width: `200px`,
              height: `200px`,
              backgroundColor: `white`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              marginRight: `15px`,
              borderRadius: `25px`,
            }}
          >
            {console.log(item)}
          </div>
        ));

        setImages(images);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <h2>Heading Two - Upload Profile and display all Profiles</h2>
      <form className="FormImages" ref={FormVal}>
        {added}
        {Images}
        <h3></h3>
        <input type="file" name="image" ref={Profile} />
        <Button onClick={addImage} type="Primary">
          Upload
        </Button>
      </form>

    <div className="EmailButton">
      verfiy Account
    </div>

    </div>
  );
};

export default Testpage;
