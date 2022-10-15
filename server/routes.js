const express = require("express");
const router = express();
const path = require("path");
const bcrypt = require("bcrypt");
const usersSchema = require("./models/Users");
const ProfileSchema = require("./models/ProfileImages");
const multer = require("multer");
const questionModel = require("./models/Questions");
const nodemailer = require("nodemailer");
const addUser = require("./models/Users");
const jwt = require("jsonWebToken");
const { json } = require("express");
const { exists } = require("./models/Users");

// multer middleware
// Question Images
const storedQuestionImage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./QuestionImages");
  },

  filename: (req, file, callBack) => {
    callBack(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadQuestionImage = multer({ storage: storedQuestionImage });

const storedProfileImage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./ProfileImages");
  },

  filename: (req, file, callBack) => {
    callBack(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadProfileImage = multer({ storage: storedProfileImage });

//add question
router.post(
  "/api/newQuestion",
  uploadQuestionImage.single("image"),
  (req, res) => {
    let data = JSON.parse(req.body.information);

    //TODO: Fix error
    const newQuestion = new questionModel({
      userId: data.userId,
      username: data.username,
      questionTitle: data.questionTitle,
      questionDescription: data.questionDescription,
      codeSnippet: data.codeSnippet,
      date: data.date,
      image: req.file.filename,
    });

    newQuestion
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json({ msg: "There is an Error:", err });
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      });
  }
);

// get all questions
router.get("/api/allQuestions", async (req, res) => {
  const allQuestions = await questionModel.find();
  res.json(allQuestions);
});

// get one question
router.get("/api/oneQuestion/:id", async (req, res) => {
  const findQuestion = await questionModel.findById(req.params.id);
  res.json(findQuestion);
});

// get all profile
router.get("/api/allProfiles/", async (req, res) => {
  const findQuestion = await ProfileSchema.find();
  res.json(findQuestion);
});

// add answer
router.post("/api/newAnswer", (req, res) => {
  let data = req.body.Answers;

  const newAnswer = new questionModel({
    userId: data.userId,
    username: data.username,
    Answer: data.answer,
  });

  newAnswer
    .save()
    .then((item) => {
      res.json(item);
      console.log("Nothing");
    })
    .catch((err) => {
      res.status(400).json({ msg: "There is an Error:", err });
      console.log(err.response);
      console.log(err.request);
      console.log(err.message);
    });
});

//add Profile Images
router.post(
  "/api/addProfileImg",
  uploadProfileImage.single("pfp"),
  (req, res) => {
    let data = JSON.parse(req.body.imgData);

    const newProfile = new ProfileSchema({
      imageLocation: req.file.filename,
      imageName: data.imageName,
    });

    console.log(newProfile);

    newProfile
      .save()
      .then((item) => {
        res.json({
          Message: "Added",
          user: item,
        });
      })
      .catch((err) => {
        res.status(400).json({ Message: "Not Added", err });
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      });
  }
);

router.post("/register", (req, res) => {
  let data = req.body;

  const newUser = new usersSchema({
    email: req.body.email,
    username: req.body.username,
    accStatus: false,
    password: req.body.password,
    profile: req.body.profile,
    score: 50,
    admin: false,
  });

  const findUser = usersSchema.findOne({
    email: req.body.email,
  });

  if (findUser) {
    newUser
      .save()
      .then(async (item) => {
        res.json(item);
        res.json({
          exists: false,
        });

        //Send conformation email has move here to only run on successfull add
        const mailerOutput = `
      <h1>Welcome ${data.username} to the website</h1>
      <p>Before you login please verify your account, using the link below</p>
      <a href= '#'>Click to verify</a>`;
        const transporter = nodemailer.createTransport({
          host: "welcome@windowsEncoded.com",
          port: 465,
          secure: true,
          auth: {
            user: "",
            pass: "",
          },
        });
      })
      .catch((err) => {
        res.status(400).send(err.response);
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      });
  } else {
    console.log("Already exists");
    res.json({
      exists: true,
    });
  }
});

router.post("/api/login/", async (req, res) => {
  const findUser = await usersSchema.findOne({
    email: req.body.email,
  });

  if (findUser) {
    console.log("user found!");
    if (await bcrypt.compare(req.body.password, findUser.password)) {
      console.log("Is a match");
      res.json({
        valid: true,
        msg: "Pass matches",
        userData: findUser,
      });
    } else {
      res.json({
        valid: false,
        msg: "Pass no matches",
      });
    }
  } else {
    console.log("user not found!");
  }
});

//node mailer

router.post("/api/newUser", (req, res) => {
  let data = req.body;

  const regUser = new newUser({
    first: data.first,
    last: data.last,
    email: data.email,
    username: data.username,
    password: data.password,
  });

  regUser
    .save()
    .then(async (item) => {
      res.json(item);

      const findUser = await addUser.findOne({
        username: req.body.username,
      });

      let userIdLink = "http://localhost:3000/auth?id=" + findUser._id;

      // Send confirmation email has moved here to only run on successful add
      const mailerOutput = `
      <h1>Welcome ${data.username} to the website</h1>
      <p>Before you can login, please verify your account using the link below</p>
      <a href=${userIdLink}>Click to Verify</a>
  `;

      const transporter = nodemailer.createTransport({
        host: "mail.patterntry.com",
        port: 465,
        secure: true,
        auth: {
          user: "mailer@patterntry.com",
          pass: "4d%T0Q{9v$mR",
        },
      });

      const mailOptions = {
        from: '"Website Mailer Client" <mailer@patterntry.com>',
        to: data.email,
        subject: "New User Registration",
        html: mailerOutput,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message Sent:", info.messageId);
      });
    })
    .catch((err) => {
      res.status(400).json({ msg: "There is an error", err });
    });
});

// router.post("/api/loginuser", async (req, res) => {
//   const findUser = await addUser.findOne({
//     username: req.body.username,
//   });

//   if (findUser) {
//     if (await bcrypt.compare(req.body.password, findUser.password)) {
//       res.send("Valid");
//       if (findUser.accStatus) {
//         res.send("You are authenticated");
//       } else {
//         res.send("Account not verified");
//       }
//     } else {
//       res.send("The Username or Password is incorrect");
//       res.send("InValid");
//     }
//   } else {
//     res.send("No User Found");
//     res.send("InValid");
//   }
// });

router.patch("/api/validate/:id", async (req, res) => {
  let userId = req.params.id;

  const findUser = await addUser.findOne({
    _id: userId,
  });

  if (findUser) {
    try {
      const tokenDecrypt = jwt.verify(
        findUser.token,
        process.env.ACCESS_TOKEN_SECRET
      );
      const authUser = await addUser.findOne({
        _id: userId,
        username: tokenDecrypt.username,
        email: tokenDecrypt.email,
      });

      if (authUser) {
        const updateAccountStatus = await addUser.updateOne(
          { _id: req.params.id },
          { $set: { accountStatus: true } }
        );

        res.json({
          user: authUser.username,
          success: true,
          msg: "Profile Verified",
        });
      } else {
        res.json({ success: false, msg: "Profile not verified" });
      }
    } catch {
      res.json({ success: false, msg: "Invalid Token" });
    }
  } else {
    res.json({
      success: false,
      msg: "Verification failed: Contact System Admin",
    });
  }
});

module.exports = router;
