import * as reviewModel from '../models/reviewModel.js';

export const createReview = async (req, res) => {
  try {
    const review = await reviewModel.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getReviewsByMovie = async (req, res) => {
  try {
    const reviews = await reviewModel.getReviewsByMovie(Number(req.params.movieId));
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewModel.deleteReview(Number(id));
    if (!review) return res.status(404).json({ error: 'Review não encontrada' });
    res.json({ message: 'Review removida com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
