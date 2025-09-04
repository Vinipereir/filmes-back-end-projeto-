import express from 'express';
import { addFavorite, getFavoritesByUser, deleteFavorite } from '../controllers/favoriteController.js';

const router = express.Router();


router.post('/', addFavorite);
router.get('/user/:userId', getFavoritesByUser);
router.delete('/:id', deleteFavorite);

export default router;
