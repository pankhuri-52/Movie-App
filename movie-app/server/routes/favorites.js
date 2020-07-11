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

            res.status(200).json({success : true, FavoriteNumber : favorite.length }) // how many ppl added movies to favorites
        })
});

module.exports = router;
