import * as movieModel from '../models/movieModel.js';

export const createMovie = async (req, res) => {
  try {
    const movie = await movieModel.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const { title } = req.query;
    if (title) {
      const movies = await movieModel.getMoviesByTitle(title);
      return res.json(movies);
    }
    const movies = await movieModel.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await movieModel.getMovieById(Number(req.params.id));
    if (!movie) return res.status(404).json({ error: 'Filme não encontrado 👀' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.deleteMovie(Number(id));
    if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
    res.json({ message: 'Filme removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
