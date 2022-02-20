const router = require("express").Router();

const Movie = require("../models/movie.model");
const verify = require("../verifyToken");


//Update
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }

});

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedMovie);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }

});

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("Movie Deleted");
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }

});

router.get("/random", verify, async (req, res) => {
    let movie;
    try {
        movie = await Movie.aggregate([
            { $sample: { size: 1 } },
        ])
        res.status(200).json(movie);
    } catch (e) {
        res.status(500).json(e);
    }


});

//get random movie
router.get("/find/:id", verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json(movie);
    } catch (e) {
        res.status(500).json(e);
    }


});
//get all
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find()
            res.status(200).json(movies);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }

});

// //delete
// router.delete("/:id", verify, async (req, res) => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {

//         try {
//             await User.findByIdAndDelete(req.params.id);
//             res.status(200).json("User Deleted");
//         } catch (e) {
//             res.status(500).json(e);
//         }
//     } else {
//         res.status(403).json("You can Delete only your account");
//     }

// });


// //get
// router.get("/find/:id", async (req, res) => {

//     try {
//         const user = await User.findById(req.params.id);
//         const { password, ...info } = user._doc;
//         res.status(200).json(info);
//     } catch (e) {
//         res.status(500).json(e);
//     }


// });

// //get all

// router.get("/", verify, async (req, res) => {
//     const query = req.query.new;
//     if (req.user.isAdmin) {

//         try {
//             const users = query ? await User.find().limit(10) : await User.find();
//             res.status(200).json(users);
//         } catch (e) {
//             res.status(500).json(e);
//         }
//     } else {
//         res.status(403).json("You are not allowed ");
//     }

// });


module.exports = router;
