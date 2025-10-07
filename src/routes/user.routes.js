import express from 'express';
import { createUser, loginUser, getAllUsers, deleteUser, verifyAdmin } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.post('/register', createUser);
router.post('/login', loginUser);

// Rotas protegidas - requerem autenticação
router.get('/', authMiddleware, getAllUsers);

// Rotas administrativas - requerem admin
router.delete('/:id', authMiddleware, verifyAdmin, deleteUser);

export default router;
