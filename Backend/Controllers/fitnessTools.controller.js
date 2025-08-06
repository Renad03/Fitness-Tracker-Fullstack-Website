import FitnessTools from "../Models/fitnessTools.model.js";

export async function getAllFitnessTools(req, res, next) {
    try {
        const fitnessTools = await FitnessTools.find(); // Use User.find()
        res.send(fitnessTools);
    } catch (err) {
        next(err);
    }
}

export async function getFitnessToolById(req, res, next) {
    try {
        const fitnessTool = await FitnessTools.findById(req.params.id); // Use User.find()
        res.send(fitnessTool);
    } catch (err) {
        next(err);
    }
}

export async function addFitnessTool(req, res, next) {
    try {
        const fitnessTool = await FitnessTools.create(req.body); // Use User.find()
        res.send(fitnessTool);
    } catch (err) {
        next(err);
    }
}

export async function updateFitnessTool(req, res, next) {
    try {
        const fitnessTool = await FitnessTools.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Use User.find()
        res.send(fitnessTool);
    } catch (err) {
        next(err);
    }
}

export async function deleteFitnessTool(req, res, next) {
    try {
        const fitnessTool = await FitnessTools.findByIdAndDelete(req.params.id); // Use User.find()
        res.send(fitnessTool);
    } catch (err) {
        next(err);
    }
}

