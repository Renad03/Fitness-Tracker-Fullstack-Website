import Trainer from "../Models/trainer.model.js";

export async function getAllTrainers(req, res, next) {
    try {
        const trainers = await Trainer.find(); // Use User.find()
        res.send(trainers);
    } catch (err) {
        next(err);
    }
}

export async function getTrainerById(req, res, next) {
    try {
        const trainer = await Trainer.findById(req.params.id); // Use User.find()
        res.send(trainer);
    } catch (err) {
        next(err);
    }
}

export async function addTrainer(req, res, next) {
    try {
        const trainer = await Trainer.create(req.body); // Use User.find()
        res.send(trainer);
    } catch (err) {
        next(err);
    }
}

export async function updateTrainer(req, res, next) {
    try {
        const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Use User.find()
        res.send(trainer);
    } catch (err) {
        next(err);
    }
}

export async function deleteTrainer(req, res, next) {
    try {
        const trainer = await Trainer.findByIdAndDelete(req.params.id); // Use User.find()
        res.send(trainer);
    } catch (err) {
        next(err);
    }
}

export async function searchTrainer(req, res, next) {
    try {
        const trainers = Trainer.find({ name: req.query.name }); // Use User.find()
        res.send(trainers); // Remember to await or use .exec() if needed
    } catch (err) {
        next(err);
    }
}
