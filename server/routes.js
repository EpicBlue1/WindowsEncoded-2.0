const express = require("express");
const router = express();
const path = require("path");
const bcrypt = require("bcrypt");
const usersSchema = require("./models/Users");
const multer = require("multer");
const questionModel = require("./models/Questions");
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
  const findQuestions = await questionModel.find();
  res.json(findQuestions);
});

// get one question
router.get("/api/oneQuestion/:id", async (req, res) => {
  const findQuestion = await questionModel.findById(req.params.id);
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
// router.post('/addProfileImg', (req, res) => {
//     const newImage = new usersSchema(
//         {
//             imageLocation: req.body.imageLocation,
//             imageName: req.body.imageName
//         }
//     );

//     newImage.save()
//     .then(item => {
//         res.json(item);
//     })
//     .catch(err => {
//         res.status(400).json(
//             {
//                 Message: "There was an error",
//                 err: err
//             }
//         );
//     });
// });

router.post("/register", (req, res) => {
  let data = req.body;

  const newUser = new usersSchema({
    email: req.body.email,
    username: req.body.username,
    accStatus: false,
    password: req.body.password,
    profile: "profile",
    score: 50,
    admin: false,
  });

  const findUser = usersSchema.findOne({
    email: req.body.email,
  });

  if (!findUser) {
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

router.post("/login", async (req, res) => {
  const findUser = await usersSchema.findOne({
    email: req.body.email,
  });

  console.log(req.body);

  if (findUser) {
    const validPass = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    if (validPass) {
      res.json({
        Message: "Valid",
        user: findUser,
      });
    } else {
      res.json({
        Message: "InValid",
      });
    }
  } else {
    res.json({ user: false });
    console.log("user doesn't exist");
  }
});

module.exports = router;
