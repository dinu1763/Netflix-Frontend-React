const { model } = require("mongoose");

const getAll = (model) => async (req, res) => {
    try {
        // const page = +req.query.page || 1;
        // const size = +req.query.size || 2;
        // const skip = (page - 1) * size;
        // const items = await model.find().skip(skip).limit(size).lean().exec();
        const items = await model.find().lean().exec();
        // const totalPages = Math.ceil(await model.find().countDocuments() / size);

        return res.json({ items, totalPages });
    } catch (e) {
        return res.status(500).send({ message: e.message, status: 'failed' });
    }
};

const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.send(item);
    } catch (e) {
        return res.status(500).send({ message: e.message, status: 'failed' });
    }
};


const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
        return res.status(201).send(item);
    } catch (e) {
        return res.status(500).send({ message: e.message, status: 'failed' });
    }
};

const patch = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(item);
    } catch (e) {
        return res.status(500).send({ message: e.message, status: 'failed' });
    }
};


const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id);
        return res.send(item);
    } catch (e) {
        return res.status(500).send({ message: e.message, status: 'failed' });
    }
};

module.exports = { getAll, getOne, post, patch, deleteOne };