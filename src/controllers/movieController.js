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
    let movies;
    if (title) {
      movies = await movieModel.getMoviesByTitle(title);
    } else {
      movies = await movieModel.getAllMovies();
    }
    // Formatar releaseDate para string ISO e garantir que imageUrl esteja presente
    const formatted = movies.map(movie => ({
      ...movie,
      releaseDate: movie.releaseDate instanceof Date
        ? movie.releaseDate.toISOString().slice(0, 10)
        : (typeof movie.releaseDate === 'string' && movie.releaseDate.includes('T'))
          ? movie.releaseDate.slice(0, 10)
          : movie.releaseDate,
      imageUrl: movie.imageUrl || null // Garantir que sempre retorne um valor para imageUrl
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await movieModel.getMovieById(Number(req.params.id));
    if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
    // Formatar releaseDate para string ISO e garantir que imageUrl esteja presente
    const formatted = {
      ...movie,
      releaseDate: movie.releaseDate instanceof Date
        ? movie.releaseDate.toISOString().slice(0, 10)
        : (typeof movie.releaseDate === 'string' && movie.releaseDate.includes('T'))
          ? movie.releaseDate.slice(0, 10)
          : movie.releaseDate,
      imageUrl: movie.imageUrl || null // Garantir que sempre retorne um valor para imageUrl
    };
    res.json(formatted);
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
