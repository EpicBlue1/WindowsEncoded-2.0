const express = require('express');
const router = express();
const path = require('path');

//add Profile Images
router.post('/api/addProfileImg', (req, res) => {
    const newImage = new usersSchema(
        {
            imageLocation: req.body.imageLocation,
            imageName: req.body.imageName
        }
    );

    newImage.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json(
            {
                Message: "There was an error",
                err: err
            }
        );
    });
});

module.exports = router;