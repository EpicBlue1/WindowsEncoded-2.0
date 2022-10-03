const express = require('express');
const router = express();
const path = require('path');
const bcrypt = require('bcrypt');
const usersSchema = require('./models/Users');

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

// encrypt password before saving
// UserSchema.pre('save', async function(next){
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         next(error);
//     }
// })

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
        res.status(400).send(err);
    });
})

// router.post('./login', async (req, res) => {
    
//     const findUser = await usersSchema.findOne({
//         email: req.body.email
//     });

//     //check if user is found
//     if(findUser){
//         const validPass = await bcrypt.compare(req.body.password, findUser.password);
//         if(validPass){
//             res.status(200).json(
//                 {
//                     Message: "Valid",
//                 }
//             );
//         } else {
//             res.status(500).json(
//                 {
//                     Message: "Password doesnt match",
//                 }
//             );
//         }
//     } else {
//         res.json({user: false});
//         console.log("user doesn't exist")
//     }

// })

module.exports = router;