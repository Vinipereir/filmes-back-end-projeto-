import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const getUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

export const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
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
