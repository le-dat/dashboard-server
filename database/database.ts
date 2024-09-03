require('dotenv').config()
import mongoose from 'mongoose'

const dbURL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.iyvjeov.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`

//export this function and imported by server.js
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(dbURL)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export const isValidId = (id: string) => {
  return mongoose.Types.ObjectId.isValid(id)
}
