import { Request, Response } from 'express'
import { UserModel } from '../database/models/user.model'
import bcrypt from 'bcryptjs'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body
    const user = await UserModel.findOne({ email }).select('email').lean()
    if (user) {
      return res.status(400).json({ message: 'Email already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await UserModel.create({
      email,
      name,
      password: hashedPassword,
    })
    return res.status(201).json({ message: 'User created' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await UserModel.findById(id).lean()
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { email, name } = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { email, name },
      { new: true }
    ).lean()
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({ message: 'User updated', data: updatedUser })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedUser = await UserModel.findByIdAndDelete(id).lean()
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const pageNumber = parseInt(page as string, 10)
    const limitNumber = parseInt(limit as string, 10)

    const users = await UserModel.find()
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .lean()

    const totalUsers = await UserModel.countDocuments()
    const totalPages = Math.ceil(totalUsers / limitNumber)

    return res.status(200).json({
      data: users,
      totalPages,
      currentPage: pageNumber,
      limit: limitNumber,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
