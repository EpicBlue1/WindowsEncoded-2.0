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

    console.log(req.body)

    //check if user is found
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