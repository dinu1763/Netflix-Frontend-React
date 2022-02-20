const router = require("express").Router();

const List = require("../models/list.model");
const verify = require("../verifyToken");


//Update
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
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
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("Deleted List");
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }

});

router.get("/", verify, async (req, res) => {
    let list = [];
    try {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).json(list);
    } catch (e) {
        res.status(500).json(e)
    }
})
module.exports = router;
