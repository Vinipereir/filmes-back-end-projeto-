import express from 'express';
import { registerUser, getAllUsers, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();


router.post('/register', registerUser);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
