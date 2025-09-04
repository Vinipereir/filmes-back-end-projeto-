import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createReview = async (data) => {
  return prisma.review.create({ data });
};

export const getReviewsByMovie = async (movieId) => {
  return prisma.review.findMany({ where: { movieId } });
};
