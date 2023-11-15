import mongoose from "mongoose";

const postSchema= new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 4
  },
  
  description: {
    type: String,
    required: true,
    min: 4
  },

  category: {
    type: String,
    required: true,
    enum: ['technology', 'science', 'politics', 'sports', 'entertainment', 'others']
  },

  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  }
 
  

}, {timestamps: true});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;