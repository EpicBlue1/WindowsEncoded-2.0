import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Badges from "../../subcomponents/Badges/Badges";
import ProfileQuestion from "../../subcomponents/ProfileQuestion/ProfileQuestion";
import ProfileSection from "../../subcomponents/ProfileSection/ProfileSection";
import Style from "./Profile.module.scss";

const Profile = (props) => {
  const Navigate = useNavigate();

  useEffect(() => {
    const USER = sessionStorage.getItem("UserData");
    if (USER === "" || USER === null || USER === undefined || USER === false) {
      Navigate("/");
    } else if (!USER) {
      Navigate("/");
    }
  }, []);
  // const [user, setUser] = useState();

  // const UserData = JSON.parse(sessionStorage.getItem("UserData"))

  // console.log(UserData.email)

  //  let data =  sessionStorage.getItem("UserData");

  //  let user = JSON.parse(userStr, (key, value) => {
  //   if (typeof value === 'string') {
  //     return value.toUpperCase();
  //   }
  //   return value;
  // });

  // console.log(user);

  //   const data = JSON.parse(UserData)

  //  console.log(data)

  //  const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   score: "",
  //   profile: ""
  // });

  // useEffect(()=>{
  //   Axios.get('http://localhost:2000/api/user/' + UserData)
  //   .then(res => {
  //     let data = res.data;
  //     console.log(data)
  //     setProductData({
  //       ProductName: data.ProductName,
  //       Description: data.Description,
  //       Price: data.Price,
  //       DiscPrice: data.DiscountedPrice,
  //       stock: data.stock,
  //       SizeOne: data.Sizes.sevenHalf,
  //       SizeTwo: data.Sizes.eight,
  //       SizeThree: data.Sizes.eightHalf
  //     })
  //     let URL = 'http://localhost:5000/productImages/' + data.image;
  //     setImgURL(URL);
  //   })
  //   .catch()
  // }, []);

  //  let dataUser =  sessionStorage.getItem("UserData", JSON.parse(UserData));

  //  let dataUser =  sessionStorage.getItem("UserData", JSON.parse(data));

  //  let UserData =  sessionStorage.getItem("UserData", JSON.parse(UserData));

  //  let UserData =  sessionStorage.getItem("UserData");

  //  console.log(dataUser)
  //  console.log(UserData.username)

  //  const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   score: "",
  //   profile: ""
  // });

  // useEffect(()=>{
  //   Axios.get('http://localhost:2000/api/user/' + UserData)
  //   .then(res => {
  //     let data = res.data;
  //     console.log(data)
  //     setProductData({
  //       ProductName: data.ProductName,
  //       Description: data.Description,
  //       Price: data.Price,
  //       DiscPrice: data.DiscountedPrice,
  //       stock: data.stock,
  //       SizeOne: data.Sizes.sevenHalf,
  //       SizeTwo: data.Sizes.eight,
  //       SizeThree: data.Sizes.eightHalf
  //     })
  //     let URL = 'http://localhost:5000/productImages/' + data.image;
  //     setImgURL(URL);
  //   })
  //   .catch()
  // }, []);

  return (
    <div className={Style.body}>
      <h1>BADGES</h1>
      <div className={Style.BadgeSection}>
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
        <Badges />
      </div>
      <br></br>
      <h1>YOUR ACTIVITY</h1>
      <div className={Style.QuestionSection}>
        <ProfileQuestion />
        <ProfileQuestion />
        <ProfileQuestion />
      </div>
      <div className={Style.ProfileSection}>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
