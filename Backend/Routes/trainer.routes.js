import { Router } from "express";
const router = Router();
import { getAllTrainers, getTrainerById, addTrainer, updateTrainer, deleteTrainer } from "../Controllers/trainer.controller.js";

// Route to get all trainers
router.get('/', getAllTrainers);

// Route to get a trainer by ID
router.get('/:id', getTrainerById);

// Route to add a new trainer
router.post('/', addTrainer);

// Route to update an existing trainer
router.put('/:id', updateTrainer);  

// Route to delete a trainer
router.delete('/:id', deleteTrainer);

export default router;