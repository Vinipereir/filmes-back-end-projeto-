import express from 'express';
import { createMovie, getAllMovies, getMovieById, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();


router.post('/', createMovie);
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.delete('/:id', deleteMovie);

export default router;
