// management user (not needed)
import { Router } from 'express'
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from '../controllers/user.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const userRoutes = Router()

userRoutes.get('/', authenticateToken, getAllUsers)
userRoutes.post('/', authenticateToken, createUser)
userRoutes.get('/:id', authenticateToken, getUser)
userRoutes.put('/:id', authenticateToken, updateUser)
userRoutes.delete('/:id', authenticateToken, deleteUser)

export default userRoutes
