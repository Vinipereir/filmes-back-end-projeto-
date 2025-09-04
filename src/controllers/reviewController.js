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
