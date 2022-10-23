const express = require("express");
const router = express();
const path = require("path");
const bcrypt = require("bcrypt");
const usersSchema = require("./models/Users");
const ProfileSchema = require("./models/ProfileImages");
const multer = require("multer");
const questionModel = require("./models/Questions");
const answerModel = require("./models/Answer");
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

    const newQuestion = new questionModel({
      userId: data.userId,
      username: data.username,
      questionTitle: data.questionTitle,
      questionDescription: data.questionDescription,
      codeSnippet: data.codeSnippet,
      language: data.language,
      image: req.file.filename,
      upvotes: 1,
      downvotes: 1,
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

// delete question
// delete a product
router.delete('/api/deleteQuestion/:id', async(req, res) => {
  const findQuestion = await questionModel.remove({_id: req.params.id});
  res.json(findQuestion);
});

// get all profile
router.get("/api/allProfiles/", async (req, res) => {
  const findQuestion = await ProfileSchema.find();
  res.json(findQuestion);
});

router.patch("/api/newAnswer/:id", async (req, res) => {
  const addAnswer = await questionModel.updateOne(
    { id: req.params.id },
    {
      $push: {
        userId: data.userId,
        username: data.username,
        answerDescription: data.answer,
        codeSnippet: data.codeSnippet,
      },
    }
  );

  try {
    res.json(addAnswer);
  } catch (err) {
    console.log(err.response);
    console.log(err.request);
    console.log(err.message);
  }
});

// add answer
router.post(
  "/api/newAnswer",
  uploadQuestionImage.single("image"),
  (req, res) => {
    let data = JSON.parse(req.body.information).Answers;
    console.log(data);

    const newAnswer = new answerModel({
      userId: data.userId,
      ParentQuestionId: data.ParentQuestionId,
      username: data.username,
      answerDescription: data.answerDescription,
      codeSnippet: data.codeSnippet,
      image: req.file.filename,
      language: data.language,
      upvotes: 0,
      downvotes: 0,
      score: 0,
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
  }
);

router.get("/api/allAnswers", async (req, res) => {
  const allAnswers = await answerModel.find();
  res.json(allAnswers);
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

  newUser
    .save()
    .then(async (item) => {
      res.json(item);

      const findUser = await usersSchema.findOne({
        // email: req.body.email,
        username: req.body.username,
      });

      // const findUser = await addUser.findOne({
      //   username: req.body.username,
      // });

      let userIdLink = "http://localhost:3000/auth?id=" + findUser._id;

      // Send confirmation email has moved here to only run on successful add user to the database.
      const mailerOutput = `
    <h1>Welcome ${data.username} to Windows-Encoded</h1>
    <p>Before you can login, please verify your account using the link below</p>
    <a style="width: 200px; height: 50px; background-color: #5067EB;
      border-radius: 20px; Color: White;" href=${userIdLink}>Click to Verify </a>
      <img src="https://drive.google.com/file/d/1XLTvZ9Nn1W39nGBc0CO7cMBRzrbxlhyW/view?usp=sharing"></img>
   
`;
      // style a buttong instead of an Href - inline styling
      // use src with http link for image

      const transporter = nodemailer.createTransport({
        host: "mail.encoded-noreply.co.za",
        port: 465,
        secure: true,
        secureConnection: true,
        auth: {
          user: "windows@encoded-noreply.co.za",
          pass: "_#y#,)rb8,k^",
        },
      });

      const mailOptions = {
        from: '"Windows-Encoded Register" <windows@encoded-noreply.co.za>',
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

router.post("/api/login/", async (req, res) => {
  const findUser = await usersSchema.findOne({
    email: req.body.email,
  });

  if (findUser) {
    console.log("user found!");
    if (await bcrypt.compare(req.body.password, findUser.password)) {
      if (findUser.accStatus) {
        res.json({
          valid: true,
          msg: "Pass matches",
          userData: findUser,
        });
      } else {
        res.json({
          valid: false,
          msg: "Account not verified. Please check your email.",
        });
      }
      console.log("Is a match");
    } else {
      res.json({
        valid: false,
        msg: "Password does not match with your email address.",
      });
    }
  } else {
    console.log("user not found!");
    res.json({
      valid: false,
      msg: "Account does not exist",
    });
  }
});

//node mailer

// router.post("/api/newUser", (req, res) => {
//   let data = req.body;

//   const regUser = new newUser({
//     first: data.first,
//     last: data.last,
//     email: data.email,
//     username: data.username,
//     password: data.password,
//   });

//   regUser
//     .save()
//     .then(async (item) => {
//       res.json(item);

//       const findUser = await addUser.findOne({
//         username: req.body.username,
//       });

//       let userIdLink = "http://localhost:3000/auth?id=" + findUser._id;

//       // Send confirmation email has moved here to only run on successful add
//       const mailerOutput = `
//       <h1>Welcome ${data.username} to Windows-Encoded</h1>
//       <p>Before you can login, please verify your account using the link below</p>
//       <a href=${userIdLink}>Click to Verify</a>
//   `;
//   // style a buttong instead of an Href - inline styling
//   // use src with http link for image

//       const transporter = nodemailer.createTransport({
//         host: "hakushu.aserv.co.za",
//         port: 465,
//         secure: true,
//         auth: {
//           user: "mainaccount@encoded-noreply.co.za",
//           pass: "wNyPan4qVd4fCBr",
//         },
//       });

//       const mailOptions = {
//         from: '"Windows-Encoded Register" <mainaccount@encoded-noreply.co.za>',
//         to: data.email,
//         subject: "New User Registration",
//         html: mailerOutput,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           return console.log(error);
//         }
//         console.log("Message Sent:", info.messageId);
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({ msg: "There is an error", err });
//     });
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
          { $set: { accStatus: true } }
        );

        res.json({
          user: authUser.username,
          success: true,
          data: findUser,
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

router.patch("/api/updateVotes/:id", async (req, res) => {
  let data = req.body;

  try {
    const upVote = await questionModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          userId: data.userId,
          username: data.username,
          questionTitle: data.questionTitle,
          questionDescription: data.questionDescription,
          codeSnippet: data.codeSnippet,
          language: data.language,
          tags: data.tags,
          upvotes: data.upvotes,
          downvotes: data.downvotes,
          score: data.score,
          image: data.image,
        },
      }
    );
    res.json(upVote);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
