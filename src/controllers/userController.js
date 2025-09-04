import * as userModel from '../models/userModel.js';

export const registerUser = async (req, res) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.updateUser(Number(id), req.body);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.deleteUser(Number(id));
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
