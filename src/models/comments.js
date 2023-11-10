import { mongoose } from "mongoose";


const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  
  authorId: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  postId: {
    type: mongo.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
}, {timestamps: true});

export default mongo.models.Comment || mongo.model('Comment', commentSchema);