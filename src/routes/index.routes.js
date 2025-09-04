import express from 'express';
import userRoutes from './user.routes.js';
import movieRoutes from './movie.routes.js';
import reviewRoutes from './review.routes.js';
import favoriteRoutes from './favorite.routes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);
router.use('/favorites', favoriteRoutes);

export default router;
