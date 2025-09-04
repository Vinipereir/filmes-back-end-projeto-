import express from 'express';
import { addFavorite, getFavoritesByUser } from '../controllers/favoriteController.js';

const router = express.Router();

router.post('/', addFavorite);
router.get('/user/:userId', getFavoritesByUser);

export default router;
