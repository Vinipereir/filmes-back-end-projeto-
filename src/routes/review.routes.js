import express from 'express';
import { createReview, getReviewsByMovie } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/movie/:movieId', getReviewsByMovie);

export default router;
