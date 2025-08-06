import { Router } from 'express';
const router = Router();
import { getAllMembershipBenefits, getMembershipBenefitsById, addMembershipBenefits, updateMembershipBenefits, deleteMembershipBenefits } from '../Controllers/membership_benefits.controller.js';

// Route to get all membership benefits
router.get('/', getAllMembershipBenefits);

// Route to get a membership benefit by ID
router.get('/:id', getMembershipBenefitsById);

// Route to add a new membership benefit
router.post('/', addMembershipBenefits);

// Route to update an existing membership benefit
router.put('/:id', updateMembershipBenefits);

// Route to delete a membership benefit
router.delete('/:id', deleteMembershipBenefits);

export default router;