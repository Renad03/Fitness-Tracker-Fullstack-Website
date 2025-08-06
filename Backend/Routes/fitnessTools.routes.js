import { Router } from 'express';
const router = Router();
import { getAllFitnessTools, getFitnessToolById, addFitnessTool, updateFitnessTool, deleteFitnessTool } from '../Controllers/fitnessTools.controller.js';

// Route to get all fitness tools
router.get('/', getAllFitnessTools);

// Route to get a fitness tool by ID
router.get('/:id', getFitnessToolById);

// Route to add a new fitness tool
router.post('/', addFitnessTool);

// Route to update an existing fitness tool
router.put('/:id', updateFitnessTool);

// Route to delete a fitness tool
router.delete('/:id', deleteFitnessTool);

export default router;