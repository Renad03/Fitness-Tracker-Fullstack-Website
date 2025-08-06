import { Router } from 'express';
const router = Router();
import { addReview, getAllReviews, getReviewById, updateReview, deleteReview } from '../Controllers/reviews.controller.js';

// Route to add a new user
router.get('/', getAllReviews);
router.post('/addReview', addReview);
router.get('/:id', getReviewById);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;