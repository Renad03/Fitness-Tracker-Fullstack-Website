import { Router } from 'express';
const router = Router();
import { getAllMemberships, getMembershipById, addMembership, updateMembership, deleteMembership } from '../Controllers/membership.controller.js';

// Route to get all memberships
router.get('/membership-plans', getAllMemberships);

// Route to get a membership by ID
router.get('/:id', getMembershipById);

// Route to add a new membership
router.post('/', addMembership);

// Route to update an existing membership
router.put('/:id', updateMembership);

// Route to delete a membership
router.delete('/:id', deleteMembership);

export default router;