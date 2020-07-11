const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");

//=================================
//             Favorite
//=================================

router.post("/favoriteNumber", auth, (req, res) => {
   
    //Find favorite Information in the favorite collection by movieId
    Favorite.find({"movieId" : req.body.movieId})
        .exec((err, favorite) => {
            if(err) return res.status(400).send(err)

            res.status(200).json({success : true, favoriteNumber : favorite.length }) // how many ppl added movies to favorites
        })
});

router.post("/favorited", auth, (req, res) => {
   
    //Find favorite Information in the favorite collection by movieId and userFrom
    Favorite.find({"movieId" : req.body.movieId, "userFrom" : req.body.userFrom})
        .exec((err, favorite) => {
            if(err) return res.status(400).send(err)

            // How can we know if I already favorite this movie or not
            let result = false;
            if(favorite.length !== 0) {
                result = true;
            }

            res.status(200).json({ success : true, favorited : result});
        })

});

module.exports = router;
