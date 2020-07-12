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

router.post("/addToFavorite", auth, (req, res) => {
   
   // save the infomation anout the movie Id and user inside the favorite collection
   const favorite = new Favorite(req.body)
    favorite.save((err,doc) => {
        if(err) return res.json({ success : false, err})

        return res.status(200).json({success : true})
    })

});

router.post("/removeFromFavorite", auth, (req, res) => {
    
    Favorite.findOneAndDelete({ movieId : req.body.movieId, userFrom : req.body.userFrom })
        .exec((err,doc) => {
            if(err) return res.status(400).json({ success : false, err})

            return res.status(200).json({success : true, doc});
        })
 
 });

 router.post("/getFavoritedMovie", auth, (req, res) => {
    
    Favorite.find({ userFrom : req.body.userFrom })
        .exec((err,favorites) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success : true, favorites})
        })
 });


module.exports = router;
