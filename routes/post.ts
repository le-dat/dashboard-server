import { Router } from 'express'
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  createManyPosts,
  filterPosts,
  addComment,
  updateComment,
  deleteComment,
} from '../controllers/post.controller'
import { authenticateToken } from '../middleware/auth.middleware'

const postRoutes = Router()

postRoutes.get('/', authenticateToken, getAllPosts)
postRoutes.get('/filter', authenticateToken, filterPosts)

postRoutes.get('/:id', authenticateToken, getPostById)
postRoutes.post('/', authenticateToken, createPost)
postRoutes.post('/many', createManyPosts)
postRoutes.put('/:id', authenticateToken, updatePost)
postRoutes.delete('/:id', authenticateToken, deletePost)

postRoutes.post('/:id/comment', authenticateToken, addComment)
postRoutes.put('/:id/comment/:commentId', authenticateToken, updateComment)
postRoutes.delete('/:id/comment/:commentId', authenticateToken, deleteComment)

export default postRoutes
