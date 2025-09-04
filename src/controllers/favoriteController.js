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

export const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await favoriteModel.deleteFavorite(Number(id));
    if (!favorite) return res.status(404).json({ error: 'Favorito não encontrado' });
    res.json({ message: 'Favorito removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
