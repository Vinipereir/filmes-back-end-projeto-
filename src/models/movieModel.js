import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createMovie = async (data) => {
  return prisma.movie.create({ data });
};

export const getAllMovies = async () => {
  return prisma.movie.findMany();
};

export const getMovieById = async (id) => {
  return prisma.movie.findUnique({ where: { id } });
};

export const getMoviesByTitle = async (title) => {
  return prisma.movie.findMany({
    where: {
      title: {
        contains: title,
      },
    },
  });
};

export const deleteMovie = async (id) => {
  return prisma.movie.delete({
    where: { id },
  });
};
