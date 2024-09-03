import { Router } from 'express'
import {
  register,
  login,
  logout,
  refreshToken,
} from '../controllers/auth.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', authenticateToken, logout)
authRoutes.post('/refresh-token', refreshToken)

export default authRoutes
