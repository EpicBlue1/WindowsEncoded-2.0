const express = require('express');
const router = express();
const path = require('path');
const bcrypt = require('bcrypt');
const usersSchema = require('./models/Users');
const multer = require('multer');
const questionModel = require('./models/Questions')

// multer middleware
//Question Images
const storedQuestionImage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './QuestionImages');
    },

    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadQuestionImage = multer({storage: storedQuestionImage});

//add question
router.post('/api/newQuestion', uploadQuestionImage.single('image'), (req, res) => {

    let data = JSON.parse(req.body.information);
    console.log(req.file.filename);

    const newQuestion = new questionModel({
        questionTitle: data.questionTitle,
        questionDescription: data.questionDescription,
        codeSnippet:data.codeSnippet,
        date: data.date,
        image: req.file.filename
    })

    newQuestion.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {n
        res.status(400).json({msg: "There is an Error:", err})
    })
});

// get all questions
router.get('/api/allQuestions', async (req, res) => {
    const findQuestions = await questionModel.find();
    res.json(findQuestions);
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

router.post('/register', (req, res) => {

    const newUser = new usersSchema(
        {
            email: req.body.email,
            username: req.body.username,
            accStatus: false,
            password: req.body.password,
            profile: "profile",
            score: 50,
            admin: false,
        }
    );

    newUser.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).send(err.response);
        console.log(err.response);
        console.log(err.request);
        console.log(err.message)
    });
})

router.post('/login', async (req, res) => {
    
    const findUser = await usersSchema.findOne({
        email: req.body.email
    });

    console.log(req.body);

    if(findUser){
        const validPass = await bcrypt.compare(req.body.password, findUser.password);
        if(validPass){
            res.json(
                {
                    Message: "Valid",
                }
            );
        } else {
            res.json(
                {
                    Message: "InValid",
                }
            );
        }
    } else {
        res.json({user: false});
        console.log("user doesn't exist")
    }

})



module.exports = router;