import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addFavorite = async (data) => {
  return prisma.favorite.create({ data });
};

export const getFavoritesByUser = async (userId) => {
  return prisma.favorite.findMany({ where: { userId }, include: { movie: true } });
};

export const deleteFavorite = async (id) => {
  return prisma.favorite.delete({
    where: { id },
  });
};
