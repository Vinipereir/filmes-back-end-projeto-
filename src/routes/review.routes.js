import express from 'express';
import { createReview, getReviewsByMovie, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();


router.post('/', createReview);
router.get('/movie/:movieId', getReviewsByMovie);
router.delete('/:id', deleteReview);

export default router;
