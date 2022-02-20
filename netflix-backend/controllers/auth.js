const router = require("express").Router();
const User = require("../models/user.model");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");
//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    // console.log(newUser);
    try {
        const user = await newUser.save();
        // sendMail('a@a.com', 'b@b.com', 'Hi This is message', 'Welcome', "<h1>Haha</h1>")
        return res.status(201).json({ user });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("Wrong Password or Email");
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong Password or Email");

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" });

        const { password, ...info } = user._doc;
        res.status(200).json({ ...info, accessToken });
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;