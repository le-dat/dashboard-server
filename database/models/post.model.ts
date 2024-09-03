import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema(
  {
    user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'users' },
    title: { type: String, maxlength: 160 },
    content: { type: String },
    comments: [
      {
        user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'users' },
        content: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
)

export const PostModel = mongoose.model('posts', PostSchema)
