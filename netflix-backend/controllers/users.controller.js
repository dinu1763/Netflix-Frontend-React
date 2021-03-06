const router = require("express").Router();

const User = require("../models/user.model");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true });
            res.status(200).json(updateUser);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You can Update only your account");
    }

});

//delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted");
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You can Delete only your account");
    }

});


//get
router.get("/find/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (e) {
        res.status(500).json(e);
    }


});

//get all

router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {

        try {
            const users = query ? await User.find().limit(10) : await User.find();
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed ");
    }

});


module.exports = router;
