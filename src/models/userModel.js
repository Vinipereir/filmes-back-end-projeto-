import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const updateUser = async (id, data) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUser = async (id) => {
  return prisma.user.delete({
    where: { id },
  });
};
