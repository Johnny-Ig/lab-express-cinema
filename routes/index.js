const express = require('express');
const Movies = require('../models/Movie.models');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res, next)=>{
    Movies.find()
    .select({title: 1, image: 1})
    .then((response)=>{
        // console.log(response);
        res.render("movies.hbs",{
            allMovies: response
        });
    })
    .catch((error)=>{
        next(error)
    })
})

router.get("/movies/:id", async (req,res, next)=>{
    try{
        const response = await Movies.findById(req.params.id);
        console.log(response);
        res.render("movie-details.hbs", {
           infoMovie: response 
        });
    }
    catch (error) {
        next(error);
      }

    
})



module.exports = router;
