import * as favoriteModel from '../models/favoriteModel.js';

export const addFavorite = async (req, res) => {
  try {
    const favorite = await favoriteModel.addFavorite(req.body);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getFavoritesByUser = async (req, res) => {
  try {
    const favorites = await favoriteModel.getFavoritesByUser(Number(req.params.userId));
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
